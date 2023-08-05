# Copyright 2017 Diagram Software S.L.
# License AGPL-3 - See http://www.gnu.org/licenses/agpl-3.0.html


import base64
import contextlib
import logging
import os
import tempfile

from odoo import _, exceptions, fields, models, release
from odoo.exceptions import ValidationError
from odoo.tools import config

_logger = logging.getLogger(__name__)

try:
    import OpenSSL.crypto
except (ImportError, IOError) as err:
    _logger.debug(err)

if tuple(map(int, OpenSSL.__version__.split("."))) < (0, 15):
    _logger.warning("OpenSSL version is not supported. Upgrade to 0.15 or greater.")


@contextlib.contextmanager
def pfx_to_pem(file, pfx_password, directory=None):
    with tempfile.NamedTemporaryFile(
        prefix="private_", suffix=".pem", delete=False, dir=directory
    ) as t_pem:
        with open(t_pem.name, "wb") as f_pem:
            p12 = OpenSSL.crypto.load_pkcs12(file, pfx_password)
            f_pem.write(
                OpenSSL.crypto.dump_privatekey(
                    OpenSSL.crypto.FILETYPE_PEM, p12.get_privatekey()
                )
            )
            f_pem.close()
        yield t_pem.name


@contextlib.contextmanager
def pfx_to_crt(file, pfx_password, directory=None):
    with tempfile.NamedTemporaryFile(
        prefix="public_", suffix=".crt", delete=False, dir=directory
    ) as t_crt:
        with open(t_crt.name, "wb") as f_crt:
            p12 = OpenSSL.crypto.load_pkcs12(file, pfx_password)
            f_crt.write(
                OpenSSL.crypto.dump_certificate(
                    OpenSSL.crypto.FILETYPE_PEM, p12.get_certificate()
                )
            )
            f_crt.close()
        yield t_crt.name


class L10nEsAeatCertificatePassword(models.TransientModel):
    _name = "l10n.es.aeat.certificate.password"
    _description = "Wizard to Load AEAT Certificate"

    password = fields.Char(string="Password", required=True)

    def get_keys(self):
        record = self.env["l10n.es.aeat.certificate"].browse(
            self.env.context.get("active_id")
        )
        directory = os.path.join(
            os.path.abspath(config["data_dir"]),
            "certificates",
            release.series,
            self.env.cr.dbname,
            record.folder,
        )
        file = base64.decodebytes(record.file)
        if tuple(map(int, OpenSSL.__version__.split("."))) < (0, 15):
            raise exceptions.Warning(
                _("OpenSSL version is not supported. Upgrade to 0.15 or greater.")
            )
        try:
            if directory and not os.path.exists(directory):
                os.makedirs(directory)
            with pfx_to_pem(file, self.password, directory) as private_key:
                record.private_key = private_key
            with pfx_to_crt(file, self.password, directory) as public_key:
                record.public_key = public_key
        except Exception as e:
            if e.args:
                args = list(e.args)
            raise ValidationError(args[-1])
