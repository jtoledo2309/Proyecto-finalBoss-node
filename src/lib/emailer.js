const nodemailer = require("nodemailer");
const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f8299aab99cd7c",
      pass: "e33a779b55ff49"
    },
  });
  return transport;
};

const sendMail = async (user) => {
  const template = `
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Imprima&display=swap"
    rel="stylesheet"
  />
  <style type="text/css">
    #outlook a {
      padding: 0;
    }
    .es-button {
      mso-style-priority: 100 !important;
      text-decoration: none !important;
    }
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all;
    }
    [data-ogsb] .es-button {
      border-width: 0 !important;
      padding: 15px 20px 15px 20px !important;
    }
    @media only screen and (max-width: 600px) {
      p,
      ul li,
      ol li,
      a {
        line-height: 150% !important;
      }
      h1,
      h2,
      h3,
      h1 a,
      h2 a,
      h3 a {
        line-height: 120%;
      }
      h1 {
        font-size: 30px !important;
        text-align: left;
      }
      h2 {
        font-size: 24px !important;
        text-align: left;
      }
      h3 {
        font-size: 20px !important;
        text-align: left;
      }
      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px !important;
        text-align: left;
      }
      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 24px !important;
        text-align: left;
      }
      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px !important;
        text-align: left;
      }
      .es-menu td a {
        font-size: 14px !important;
      }
      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li,
      .es-header-body a {
        font-size: 14px !important;
      }
      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li,
      .es-content-body a {
        font-size: 14px !important;
      }
      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li,
      .es-footer-body a {
        font-size: 14px !important;
      }
      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li,
      .es-infoblock a {
        font-size: 12px !important;
      }
      *[class="gmail-fix"] {
        display: none !important;
      }
      .es-m-txt-c,
      .es-m-txt-c h1,
      .es-m-txt-c h2,
      .es-m-txt-c h3 {
        text-align: center !important;
      }
      .es-m-txt-r,
      .es-m-txt-r h1,
      .es-m-txt-r h2,
      .es-m-txt-r h3 {
        text-align: right !important;
      }
      .es-m-txt-l,
      .es-m-txt-l h1,
      .es-m-txt-l h2,
      .es-m-txt-l h3 {
        text-align: left !important;
      }
      .es-m-txt-r img,
      .es-m-txt-c img,
      .es-m-txt-l img {
        display: inline !important;
      }
      .es-button-border {
        display: block !important;
      }
      a.es-button,
      button.es-button {
        font-size: 18px !important;
        display: block !important;
        border-right-width: 0px !important;
        border-left-width: 0px !important;
        border-top-width: 15px !important;
        border-bottom-width: 15px !important;
      }
      .es-adaptive table,
      .es-left,
      .es-right {
        width: 100% !important;
      }
      .es-content table,
      .es-header table,
      .es-footer table,
      .es-content,
      .es-footer,
      .es-header {
        width: 100% !important;
        max-width: 600px !important;
      }
      .es-adapt-td {
        display: block !important;
        width: 100% !important;
      }
      .adapt-img {
        width: 100% !important;
        height: auto !important;
      }
      .es-m-p0 {
        padding: 0px !important;
      }
      .es-m-p0r {
        padding-right: 0px !important;
      }
      .es-m-p0l {
        padding-left: 0px !important;
      }
      .es-m-p0t {
        padding-top: 0px !important;
      }
      .es-m-p0b {
        padding-bottom: 0 !important;
      }
      .es-m-p20b {
        padding-bottom: 20px !important;
      }
      .es-mobile-hidden,
      .es-hidden {
        display: none !important;
      }
      tr.es-desk-hidden,
      td.es-desk-hidden,
      table.es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important;
      }
      tr.es-desk-hidden {
        display: table-row !important;
      }
      table.es-desk-hidden {
        display: table !important;
      }
      td.es-desk-menu-hidden {
        display: table-cell !important;
      }
      .es-menu td {
        width: 1% !important;
      }
      table.es-table-not-adapt,
      .esd-block-html table {
        width: auto !important;
      }
      table.es-social {
        display: inline-block !important;
      }
      table.es-social td {
        display: inline-block !important;
      }
      .es-desk-hidden {
        display: table-row !important;
        width: auto !important;
        overflow: visible !important;
        max-height: inherit !important;
      }
    }
  </style>
</head>
<body
  style="
    width: 100%;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <div class="es-wrapper-color" style="background-color: #ffffff">
    <table
      class="es-wrapper"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
        background-color: #ffffff;
      "
    >
      <tr>
        <td valign="top" style="padding: 0; margin: 0">
          <table
            cellpadding="0"
            cellspacing="0"
            class="es-footer"
            align="center"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
              background-color: transparent;
              background-repeat: repeat;
              background-position: center top;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  bgcolor="#bcb8b1"
                  class="es-footer-body"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #ffffff;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        margin: 0;
                        padding-top: 20px;
                        padding-bottom: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                      "
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style="padding: 0; margin: 0; width: 520px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    font-size: 0px;
                                  "
                                >
                                  <a
                                    target="_blank"
                                    href="https://100.26.168.73"
                                    style="
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      text-decoration: underline;
                                      color: #2d3142;
                                      font-size: 14px;
                                    "
                                    ><img
                                      src="https://mfnwjv.stripocdn.email/content/guids/CABINET_37ffd2d5613f1790bad2761ab48b1b8749914e15b1d0d0571c724203b48d5917/images/stylized_uwu_emoticonsvg.png"
                                      alt="Logo"
                                      style="
                                        display: block;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                        -ms-interpolation-mode: bicubic;
                                      "
                                      height="60"
                                      title="Logo"
                                  /></a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            class="es-content"
            align="center"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  bgcolor="#efefef"
                  class="es-content-body"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #efefef;
                    border-radius: 20px 20px 0 0;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        padding: 0;
                        margin: 0;
                        padding-top: 40px;
                        padding-left: 40px;
                        padding-right: 40px;
                      "
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style="padding: 0; margin: 0; width: 520px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  class="es-m-txt-c"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    font-size: 0px;
                                  "
                                >
                                  <a
                                    target="_blank"
                                    href="https://viewstripo.email"
                                    style="
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      text-decoration: underline;
                                      color: #2d3142;
                                      font-size: 18px;
                                    "
                                    ><img
                                      src="https://mfnwjv.stripocdn.email/content/guids/CABINET_37ffd2d5613f1790bad2761ab48b1b8749914e15b1d0d0571c724203b48d5917/images/stsmall507x507pad600x600f8f8f8u10.jpg"
                                      alt="Loren Lynch Marketing Manager at Company"
                                      style="
                                        display: block;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                        -ms-interpolation-mode: bicubic;
                                        border-radius: 100px;
                                      "
                                      width="100"
                                      title="Loren Lynch Marketing Manager at Company"
                                  /></a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="left"
                      style="
                        padding: 0;
                        margin: 0;
                        padding-top: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                      "
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style="padding: 0; margin: 0; width: 520px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              bgcolor="#fafafa"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: separate;
                                border-spacing: 0px;
                                background-color: #fafafa;
                                border-radius: 10px;
                              "
                              role="presentation"
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 20px; margin: 0"
                                >
                                  <h3
                                    style="
                                      margin: 0;
                                      line-height: 34px;
                                      mso-line-height-rule: exactly;
                                      font-family: Imprima, Arial, sans-serif;
                                      font-size: 28px;
                                      font-style: normal;
                                      font-weight: bold;
                                      color: #2d3142;
                                    "
                                  >
                                    Hola ${user.name}
                                  </h3>
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: Imprima, Arial, sans-serif;
                                      line-height: 27px;
                                      color: #2d3142;
                                      font-size: 18px;
                                    "
                                  >
                                    <br />Gracias por registrarte con
                                    nosotros, tus credenciales son las
                                    siguientes:<br /><br />Usuario:
                                    ${user.name}.<br />Em@il: ${user.email}<br /><br />Esperamos que
                                    disfrutes de tus compras.
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            class="es-content"
            align="center"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  bgcolor="#efefef"
                  class="es-content-body"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #efefef;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        margin: 0;
                        padding-top: 20px;
                        padding-bottom: 40px;
                        padding-left: 40px;
                        padding-right: 40px;
                      "
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style="padding: 0; margin: 0; width: 520px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0"
                                >
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: Imprima, Arial, sans-serif;
                                      line-height: 27px;
                                      color: #2d3142;
                                      font-size: 18px;
                                    "
                                  >
                                    Gracias,<br /><br />David,<br />Nodemailer-tester
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            class="es-content"
            align="center"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  bgcolor="#efefef"
                  class="es-content-body"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #efefef;
                    border-radius: 0 0 20px 20px;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        margin: 0;
                        padding-top: 30px;
                        padding-bottom: 40px;
                        padding-left: 40px;
                        padding-right: 40px;
                      "
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style="padding: 0; margin: 0; width: 520px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="padding: 0; margin: 0"
                                >
                                  <span
                                    class="msohide es-button-border"
                                    style="
                                      border-style: solid;
                                      border-color: #2cb543;
                                      background: #7630f3;
                                      border-width: 0px;
                                      display: block;
                                      border-radius: 30px;
                                      width: auto;
                                      mso-hide: all;
                                    "
                                    ><a
                                      href=""
                                      class="es-button msohide"
                                      target="_blank"
                                      style="
                                        mso-style-priority: 100 !important;
                                        text-decoration: none;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        color: #ffffff;
                                        font-size: 22px;
                                        border-style: solid;
                                        border-color: #7630f3;
                                        border-width: 15px 20px 15px 20px;
                                        display: block;
                                        background: #7630f3;
                                        border-radius: 30px;
                                        font-family: Imprima, Arial,
                                          sans-serif;
                                        font-weight: bold;
                                        font-style: normal;
                                        line-height: 26px;
                                        width: auto;
                                        text-align: center;
                                        mso-hide: all;
                                        border-left-width: 5px;
                                        border-right-width: 5px;
                                      "
                                      >UwUntuGames</a
                                    ></span
                                  ><!--<![endif]-->
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            class="es-footer"
            align="center"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
              background-color: transparent;
              background-repeat: repeat;
              background-position: center top;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  bgcolor="#bcb8b1"
                  class="es-footer-body"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #ffffff;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        margin: 0;
                        padding-left: 20px;
                        padding-right: 20px;
                        padding-bottom: 30px;
                        padding-top: 40px;
                      "
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="padding: 0; margin: 0; width: 560px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  class="es-m-txt-c"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    padding-bottom: 20px;
                                    font-size: 0px;
                                  "
                                >
                                  <img
                                    src="https://mfnwjv.stripocdn.email/content/guids/CABINET_055ba03e85e991c70304fecd78a2dceaf6b3f0bc1b0eb49336463d3599679494/images/vector.png"
                                    alt="Logo"
                                    style="
                                      display: block;
                                      border: 0;
                                      outline: none;
                                      text-decoration: none;
                                      -ms-interpolation-mode: bicubic;
                                      font-size: 12px;
                                    "
                                    title="Logo"
                                    height="60"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  class="es-m-txt-c"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    padding-top: 10px;
                                    padding-bottom: 20px;
                                    font-size: 0;
                                  "
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-table-not-adapt es-social"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        valign="top"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-right: 5px;
                                        "
                                      >
                                        <a
                                          target="_blank"
                                          href="https://UwUntuGames.com"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          ><img
                                            src="https://mfnwjv.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                            alt="Tw"
                                            title="Twitter"
                                            height="24"
                                            style="
                                              display: block;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                        /></a>
                                      </td>
                                      <td
                                        align="center"
                                        valign="top"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-right: 5px;
                                        "
                                      >
                                        <a
                                          target="_blank"
                                          href="https://UwUntuGames.com"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          ><img
                                            src="https://mfnwjv.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                            alt="Fb"
                                            title="Facebook"
                                            height="24"
                                            style="
                                              display: block;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                        /></a>
                                      </td>
                                      <td
                                        align="center"
                                        valign="top"
                                        style="padding: 0; margin: 0"
                                      >
                                        <a
                                          target="_blank"
                                          href="https://UwuntuGames.com"
                                          style="
                                            -webkit-text-size-adjust: none;
                                            -ms-text-size-adjust: none;
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #2d3142;
                                            font-size: 14px;
                                          "
                                          ><img
                                            src="https://mfnwjv.stripocdn.email/content/assets/img/social-icons/logo-black/linkedin-logo-black.png"
                                            alt="In"
                                            title="Linkedin"
                                            height="24"
                                            style="
                                              display: block;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                        /></a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  style="padding: 0; margin: 0"
                                >
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: Imprima, Arial, sans-serif;
                                      line-height: 20px;
                                      color: #2d3142;
                                      font-size: 13px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                      href=""
                                    ></a
                                    ><a
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                      href=""
                                      >Privacy Policy</a
                                    ><a
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #2d3142;
                                        font-size: 13px;
                                      "
                                      href=""
                                    ></a>
                                    •
                                    <a
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                      href=""
                                      >Unsubscribe</a
                                    >
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    padding-top: 20px;
                                  "
                                >
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: Imprima, Arial, sans-serif;
                                      line-height: 21px;
                                      color: #2d3142;
                                      font-size: 14px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href=""
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                    ></a
                                    >Copyright © 2022 Company<a
                                      target="_blank"
                                      href=""
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                    ></a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            class="es-footer"
            align="center"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
              background-color: transparent;
              background-repeat: repeat;
              background-position: center top;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  bgcolor="#ffffff"
                  class="es-footer-body"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #ffffff;
                    width: 600px;
                  "
                >
                  <tr>
                    <td align="left" style="padding: 20px; margin: 0">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="padding: 0; margin: 0; width: 560px"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="padding: 0; margin: 0; display: none"
                                ></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
`;
  const transporter = createTransport();
  const info = await transporter.sendMail({
    from: '"UwuntuGames🛒" <UwuntuGames@games.com>',
    to: user.email,
    subject: `Hola ${user.name}, bienvenido a UwUntuGames`,
    html: template,
  });

  console.log("Message sent: %s", info.messageId);
  return;
};

const sendResetMail= async(user, link)=>{
  
  const templateReset = `
  <head>
  <link
      href="https://fonts.googleapis.com/css2?family=Imprima&display=swap"
      rel="stylesheet"
    />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 20px 15px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120%;
        }
        h1 {
          font-size: 30px !important;
          text-align: left;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
          text-align: left;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
          text-align: left;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          display: block !important;
          border-right-width: 0px !important;
          border-left-width: 0px !important;
          border-top-width: 15px !important;
          border-bottom-width: 15px !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: arial, 'helvetica neue', helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #ffffff">
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #ffffff;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#bcb8b1"
                    class="es-footer-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 20px;
                          padding-bottom: 20px;
                          padding-left: 40px;
                          padding-right: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://100.26.168.73"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                      ><img
                                        src="https://mfnwjv.stripocdn.email/content/guids/CABINET_37ffd2d5613f1790bad2761ab48b1b8749914e15b1d0d0571c724203b48d5917/images/stylized_uwu_emoticonsvg.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        height="60"
                                        title="Logo"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#efefef"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #efefef;
                      border-radius: 20px 20px 0 0;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://viewstripo.email"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                      ><img
                                        src="https://mfnwjv.stripocdn.email/content/guids/CABINET_37ffd2d5613f1790bad2761ab48b1b8749914e15b1d0d0571c724203b48d5917/images/stsmall507x507pad600x600f8f8f8u10.jpg"
                                        alt="Loren Lynch Marketing Manager at Company"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          border-radius: 100px;
                                        "
                                        width="100"
                                        title="Loren Lynch Marketing Manager at Company"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 20px;
                          padding-left: 40px;
                          padding-right: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                bgcolor="#fafafa"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: separate;
                                  border-spacing: 0px;
                                  background-color: #fafafa;
                                  border-radius: 10px;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 20px; margin: 0"
                                  >
                                    <h3
                                      style="
                                        margin: 0;
                                        line-height: 34px;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        font-size: 28px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #2d3142;
                                      "
                                    >
                                      Hola ${user.name}
                                    </h3>
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 27px;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                    >
                                      <br />
                                      Hemos recibido un cambio de reseteo de contraseña:<br /><br />Usuario:
                                      ${user.name}.<br />Em@il: ${user.email}<br />
                                     <br /><br />Si quieres reiniciar tu contraseña accedes desde <a href=${link}>aqui<a/>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#efefef"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #efefef;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 20px;
                          padding-bottom: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 27px;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                    >
                                      Gracias,<br /><br />David,<br />Nodemailer-tester
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#efefef"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #efefef;
                      border-radius: 0 0 20px 20px;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 30px;
                          padding-bottom: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <span
                                      class="msohide es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #7630f3;
                                        border-width: 0px;
                                        display: block;
                                        border-radius: 30px;
                                        width: auto;
                                        mso-hide: all;
                                      "
                                      ><a
                                        href=""
                                        class="es-button msohide"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 22px;
                                          border-style: solid;
                                          border-color: #7630f3;
                                          border-width: 15px 20px 15px 20px;
                                          display: block;
                                          background: #7630f3;
                                          border-radius: 30px;
                                          font-family: Imprima, Arial,
                                            sans-serif;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 26px;
                                          width: auto;
                                          text-align: center;
                                          mso-hide: all;
                                          border-left-width: 5px;
                                          border-right-width: 5px;
                                        "
                                        >UwUntuGames</a
                                      ></span
                                    ><!--<![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#bcb8b1"
                    class="es-footer-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-bottom: 30px;
                          padding-top: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      src="https://mfnwjv.stripocdn.email/content/guids/CABINET_055ba03e85e991c70304fecd78a2dceaf6b3f0bc1b0eb49336463d3599679494/images/vector.png"
                                      alt="Logo"
                                      style="
                                        display: block;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                        -ms-interpolation-mode: bicubic;
                                        font-size: 12px;
                                      "
                                      title="Logo"
                                      height="60"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 20px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-table-not-adapt es-social"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 5px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://UwUntuGames.com"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #2d3142;
                                              font-size: 14px;
                                            "
                                            ><img
                                              src="https://mfnwjv.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                              alt="Tw"
                                              title="Twitter"
                                              height="24"
                                              style="
                                                display: block;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 5px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://UwUntuGames.com"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #2d3142;
                                              font-size: 14px;
                                            "
                                            ><img
                                              src="https://mfnwjv.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                              alt="Fb"
                                              title="Facebook"
                                              height="24"
                                              style="
                                                display: block;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="padding: 0; margin: 0"
                                        >
                                          <a
                                            target="_blank"
                                            href="https://UwuntuGames.com"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #2d3142;
                                              font-size: 14px;
                                            "
                                            ><img
                                              src="https://mfnwjv.stripocdn.email/content/assets/img/social-icons/logo-black/linkedin-logo-black.png"
                                              alt="In"
                                              title="Linkedin"
                                              height="24"
                                              style="
                                                display: block;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 20px;
                                        color: #2d3142;
                                        font-size: 13px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                        href=""
                                      ></a
                                      ><a
                                        target="_blank"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                        href=""
                                        >Privacy Policy</a
                                      ><a
                                        target="_blank"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 13px;
                                        "
                                        href=""
                                      ></a>
                                      •
                                      <a
                                        target="_blank"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                        href=""
                                        >Unsubscribe</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 21px;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href=""
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                      ></a
                                      >Copyright © 2022 Company<a
                                        target="_blank"
                                        href=""
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                      ></a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    class="es-footer-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; display: none"
                                  ></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
  `;
  const transporter = createTransport();
  const info = await transporter.sendMail({
    from: '"UwuntuGames🛒" <UwuntuGames@games.com>',
    to: user.email,
    subject: `Hola ${user.name}, Reseteo de contraseña`,
    html: templateReset,
  });
  console.log("Message sent: %s", info.messageId);
  return;

}



exports.sendResetMail = (user, link) => sendResetMail(user, link)
exports.sendMail = (user) => sendMail(user);
