

export interface QueryFilter {
    limit: number, // gioi han so luong items tra ve
    page: number, // trang hien tai
    sort: 'asc' | 'desc', // sap xep tu nho den lon (asc) va nguoc lai
    sort_by: 'name' | 'created_at' | 'updated_at' | 'id',
    key: string,
    type: string,
    status: true | false
}

export function getMerchantInitials(merchant_name: string) {
    let initials = merchant_name.charAt(0);
    return initials.toUpperCase();
}

export const emptyTemplate = {
    "counters": {
        "u_column": 1,
        "u_row": 1
    },
    "body": {
        "id": "38gSbWNtYp",
        "rows": [{
            "id": "fEEPAeMlmC",
            "cells": [1],
            "columns": [{
                "id": "lCVoutWhcY",
                "contents": [],
                "values": {
                    "border": {},
                    "padding": "0px",
                    "backgroundColor": "",
                    "_meta": {
                        "htmlID": "u_column_1",
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_1",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": "500px",
            "fontFamily": {
                "label": "Arial",
                "value": "arial,helvetica,sans-serif"
            },
            "textColor": "#000000",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "cover",
                "position": "center"
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#e7e7e7",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0000ee",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    "schemaVersion": 15
}