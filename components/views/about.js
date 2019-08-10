<template>
  <!--
  <div class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">
    Frameworkless, buildless, single-page, micro-frontend, web component <strong>pattern</strong>
    <ul>
      <li>Loosely-coupled modules are better than monoliths</li>
      <li>Vanilla JS is better than yet another API to learn</li>
      <li>Simple is better than complicated</li>
      <li>Fast is better than slow</li>
      <li>Small is better than large</li>
      <li>Scalable is better than hitting an upper limit</li>
      <li>Easy to reason about is better than hard to reason about</li>
    </ul>
  </div>
  -->
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>
      </title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
        .ReadMsgBody {
          width: 100%;
        }
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass * {
          line-height:100%;
        }
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        table, td {
          border-collapse:collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
        p {
          display: block;
          margin: 13px 0;
        }
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width:320px;
          }
          @viewport {
            width:320px;
          }
        }
      </style>
      <!--<![endif]-->
      <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
      <!--[if lte mso 11]>
  <style type="text/css">
  .outlook-group-fix {
  width:100% !important;
  }
  </style>
  <![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
      </style>
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
          .mj-column-per-100 {
            width:100%!important;
          }
          .mj-column-per-50 {
            width:50%!important;
          }
          .mj-column-per-33 {
            width:33.333333333333336%!important;
          }
          .mj-column-px-400 {
            width:400px!important;
          }
        }
      </style>
    </head>
    <body>
      <div class="mj-container">
        <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style="margin:0px auto;max-width:600px;background:#f0f0f0;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#f0f0f0;" align="center" border="0">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
  <td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="left">
                            <div style="cursor:auto;color:#626262;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-style:italic;line-height:22px;text-align:left;">My Company
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style="margin:0px auto;max-width:600px;background:url(http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg) top center / cover no-repeat;">
          <!--[if mso | IE]>
  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
  <v:fill origin="0.5, 0" position="0.5,0" type="tile" src="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg" ></v:fill>
  <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
  <![endif]-->
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:url(http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg) top center / cover no-repeat;" align="center" border="0" background="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
  <td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <div style="cursor:auto;color:#fff;font-family:Helvetica Neue;font-size:40px;line-height:22px;text-align:center;">Slogan here
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:10px 25px;" align="center" valign="middle" bgcolor="#F63A4D">
                                    <a href="#" style="text-decoration:none;background:#F63A4D;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;text-transform:none;margin:0px;" target="_blank">Promotion</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if mso | IE]>
  <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office"> </o:p></p>
  </v:textbox>
  </v:rect>
  <![endif]-->
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style="margin:0px auto;max-width:600px;background:#fafafa;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#fafafa;" align="center" border="0">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
  <td style="vertical-align:top;width:400px;">
  <![endif]-->
                  <div class="mj-column-px-400 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="left">
                            <div style="cursor:auto;color:#626262;font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:22px;text-align:left;">My Awesome Text
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="left">
                            <div style="cursor:auto;color:#525252;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit amet suscipit nibh. Proin nec commodo purus. Sed eget
                              nulla elit. Nulla aliquet mollis faucibus.
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:10px 25px;" align="center" valign="middle" bgcolor="#F45E43">
                                    <a href="#" style="text-decoration:none;background:#F45E43;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;text-transform:none;margin:0px;" target="_blank">Learn more</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style="margin:0px auto;max-width:600px;background:white;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:white;" align="center" border="0">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
  <td style="vertical-align:top;width:300px;">
  <![endif]-->
                  <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:200px;">
                                    <img alt="" height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="200">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td><td style="vertical-align:top;width:300px;">
  <![endif]-->
                  <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="left">
                            <div style="cursor:auto;color:#626262;font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:22px;text-align:left;">Find amazing places
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="left">
                            <div style="cursor:auto;color:#525252;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style="margin:0px auto;max-width:600px;background:#fbfbfb;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#fbfbfb;" align="center" border="0">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
  <td style="vertical-align:top;width:200px;">
  <![endif]-->
                  <div class="mj-column-per-33 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:100px;">
                                    <img alt="" height="auto" src="http://191n.mj.am/img/191n/3s/x0l.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="100">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td><td style="vertical-align:top;width:200px;">
  <![endif]-->
                  <div class="mj-column-per-33 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:100px;">
                                    <img alt="" height="auto" src="http://191n.mj.am/img/191n/3s/x01.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="100">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td><td style="vertical-align:top;width:200px;">
  <![endif]-->
                  <div class="mj-column-per-33 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:100px;">
                                    <img alt="" height="auto" src="http://191n.mj.am/img/191n/3s/x0s.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="100">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style="margin:0px auto;max-width:600px;background:#e7e7e7;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#e7e7e7;" align="center" border="0">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
  <td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="center" border="0">
                              <tbody>
                                <tr>
                                  <td style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:10px 25px;" align="center" valign="middle" bgcolor="#414141">
                                    <a href="#" style="text-decoration:none;background:#414141;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;text-transform:none;margin:0px;" target="_blank">Hello There!</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center">
                            <div>
                              <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>
  <![endif]-->
                              <table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0">
                                <tbody>
                                  <tr>
                                    <td style="padding:4px;vertical-align:middle;">
                                      <table role="presentation" cellpadding="0" cellspacing="0" style="background:#3b5998;border-radius:3px;width:20px;" border="0">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:0px;vertical-align:middle;width:20px;height:20px;">
                                              <a href="https://www.facebook.com/sharer/sharer.php?u=[[SHORT_PERMALINK]]"><img alt="facebook" height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="display:block;border-radius:3px;" width="20"></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style="padding:4px 4px 4px 0;vertical-align:middle;">
                                      <a href="https://www.facebook.com/sharer/sharer.php?u=[[SHORT_PERMALINK]]" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;">Share</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso | IE]>
  </td><td>
  <![endif]-->
                              <table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0">
                                <tbody>
                                  <tr>
                                    <td style="padding:4px;vertical-align:middle;">
                                      <table role="presentation" cellpadding="0" cellspacing="0" style="background:#55acee;border-radius:3px;width:20px;" border="0">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:0px;vertical-align:middle;width:20px;height:20px;">
                                              <a href="https://twitter.com/home?status=[[SHORT_PERMALINK]]"><img alt="twitter" height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" style="display:block;border-radius:3px;" width="20"></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style="padding:4px 4px 4px 0;vertical-align:middle;">
                                      <a href="https://twitter.com/home?status=[[SHORT_PERMALINK]]" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;">Tweet</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
      </div>
    </body>
  </html>
</template>
<script>
  export default {
    elementName: 'core-about',
    name: 'CoreAbout',

    connectedCallback() {
      console.log('core-copy connectedCallback')

      this.store = document.querySelector('app-root').store
      this._insert({shadow: false, template: false})
      this.render(this.store.state)
    },

    render(state) {
      console.log('core-about render', state)
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }

</script>
<style>
  @import "/assets/bootstrap.min.css";
  .contact-clean {
    padding: 20px 0;
  }
</style>
