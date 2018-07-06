function Common_channel(obj) {
    obj.combobox({
        fieldLabel: $.su.CHAR.WIRELESS.CHANNEL_FREQUENCY,
        items: [{
                "name": $.su.CHAR.WIRELESS.AUTO,
                "value": "0"
            }
        ]
    }).on("ev_change", function (e, oldValue, newValue) {
        if (newValue[0] === undefined) {
            $(this).combobox('selectNoTrigger', '0');
        }
    });
}

/* global varibale */
var is_show_2g = true; /* used in wireless_setting_common.html and wireless_adv.html. */
var rawCountryInfo = [];
var TwoGSupportHT40 = false; /* a flag for in current country, 2.4G support HT40 or not */
var FiveGSupportHT40 = false; /* a flag for in current country, 5G support HT40 or not */
var FiveGSupportHT80 = false;
var support5G = false; /* filter channel supported DFS, if all Channel support DFS, this country don't support 5G */

/****************** region change code ***************************************/
var FLAG_DFS_CHANNEL = 0x00002; /* DFS channel. */
var FLAG_2G_CHANNEL = 0x00080; /* 2 GHz spectrum channel. */
var FLAG_5G_CHANNEL = 0x00100; /* 5 GHz spectrum channel */
var FLAG_MODE_HT20 = 0x10000; /* HT 20 channel */
var FLAG_MODE_HT40_ABOVE = 0x20000; /* HT 40 with extension channel above */
var FLAG_MODE_HT40_BELOW = 0x40000; /* HT 40 with extension channel below */
var FLAG_MODE_HT80 = 0x80000;

var WLAN_PRIVACY_MODE_NONE = "0";
var WLAN_PRIVACY_MODE_WEP = "1";
var WLAN_PRIVACY_MODE_WPA_WPA2 = "2";
var WLAN_PRIVACY_MODE_PSK_PSK2 = "3";

var securityTemplate = {};
securityTemplate[WLAN_PRIVACY_MODE_NONE] = $.su.CHAR.WIRELESS.WIRELESS_SEC_NONE;
securityTemplate[WLAN_PRIVACY_MODE_WEP] = $.su.CHAR.WIRELESS.WIRELESS_SEC_WEP;
securityTemplate[WLAN_PRIVACY_MODE_WPA_WPA2] = $.su.CHAR.WIRELESS.WIRELESS_SEC_WPA_ENTER;
securityTemplate[WLAN_PRIVACY_MODE_PSK_PSK2] = $.su.CHAR.WIRELESS.WIRELESS_SEC_WPA;

function switchPrivacyToString(num) {
    return securityTemplate[num];
}


var WLAN_PRIVACY_PSKVERSION_AUTO = "3";
var WLAN_PRIVACY_PSKVERSION_WPA_PSK = "1";
var WLAN_PRIVACY_PSKVERSION_WPA2_PSK = "2";

var WLAN_PRIVACY_PSKENCRYPTION_AUTO = "1";
var WLAN_PRIVACY_PSKENCRYPTION_TKIP = "2";
var WLAN_PRIVACY_PSKENCRYPTION_AES = "3";

var WLAN_PRIVACY_WPAVERSION_AUTO = "3";
var WLAN_PRIVACY_WPAVERSION_WPA = "1";
var WLAN_PRIVACY_WPAVERSION_WPA2 = "2";

var WLAN_PRIVACY_WPAENCRYPTION_AUTO = "1";
var WLAN_PRIVACY_WPAENCRYPTION_TKIP = "2";
var WLAN_PRIVACY_WPAENCRYPTION_AES = "3";

var WLAN_PRIVACY_AUTHTYPE_AUTO = "3";
var WLAN_PRIVACY_AUTHTYPE_OPEN_SYSTEM = "1";
var WLAN_PRIVACY_AUTHTYPE_SHARE_DKEY = "2";

var WLAN_PRIVACY_WEP_TYPE_64 = "64";
var WLAN_PRIVACY_WEP_TYPE_128 = "128";
var WLAN_PRIVACY_WEP_TYPE_152 = "152";

var WLAN_CHAN_WIDTH_5M = "0";
var WLAN_CHAN_WIDTH_10M = "1";
var WLAN_CHAN_WIDTH_20M = "2";
var WLAN_CHAN_WIDTH_40M = "3";
var WLAN_CHAN_WIDTH_2040M = "4";
var WLAN_CHAN_WIDTH_80M = "5";

var WLAN_MODE_11N_ONLY = "0";
var WLAN_MODE_11GN_MIXED = "1";
var WLAN_MODE_11BGN_MIXED = "2";
var WLAN_MODE_11AC_ONLY = "3";
var WLAN_MODE_11NAC_MIXED = "4";
var WLAN_MODE_11NAAC_MIXED = "5";

var WLAN_OPMODE_AP = "1";
var WLAN_OPMODE_CLIENT = "2";
var WLAN_OPMODE_REPEATER = "4";
var WLAN_OPMODE_BRIDGE = "8";
var WLAN_OPMODE_MSSID = "16";

var ModeTemplate = {}
ModeTemplate[WLAN_MODE_11N_ONLY] = $.su.CHAR.WIRELESS.MODE_N;
ModeTemplate[WLAN_MODE_11GN_MIXED] = $.su.CHAR.WIRELESS.MODE_GN;
ModeTemplate[WLAN_MODE_11BGN_MIXED] = $.su.CHAR.WIRELESS.MODE_BGN;
ModeTemplate[WLAN_MODE_11AC_ONLY] = $.su.CHAR.WIRELESS.MODE_AC;
ModeTemplate[WLAN_MODE_11NAC_MIXED] = $.su.CHAR.WIRELESS.MODE_NAC;
ModeTemplate[WLAN_MODE_11NAAC_MIXED] = $.su.CHAR.WIRELESS.MODE_NAAC;

var WLAN_CHANNEL_AUTO = 0;

function changeRegion(data) {
    rawCountryInfo = data;

    TwoGSupportHT40 = false;
    FiveGSupportHT40 = false;
    FiveGSupportHT80 = false;
    support5G = false;

    $.each(rawCountryInfo, function (index, value) {
        var flag = parseInt(value.flag, 16);
        if (flag & FLAG_5G_CHANNEL)
            support5G = true;

        if ((flag & FLAG_2G_CHANNEL) && (flag & (FLAG_MODE_HT40_ABOVE | FLAG_MODE_HT40_BELOW)))
            TwoGSupportHT40 = true;

        if ((flag & FLAG_5G_CHANNEL) && (flag & (FLAG_MODE_HT40_ABOVE | FLAG_MODE_HT40_BELOW)))
            FiveGSupportHT40 = true;

        if ((flag & FLAG_5G_CHANNEL) && (flag & FLAG_MODE_HT80))
            FiveGSupportHT80 = true;
    });

    if (!support5G) is_show_2g = true;
}
/************************* Region Mode Channel ChannelWidth ****************************************/
var RMCC_Box = new Object();

function clean_RMCC_Box() {
    RMCC_Box = null;
    RMCC_Box = new Object();
}

function TP_RMCC_Init(prefix, suffix, element) {
    var element = element || "";
    if (element === "" || $(element).get(0) === undefined) {
        alert("EncrpytionWidget should have an element");
        return;
    }

    var input = $(element);

    var prefix = prefix || "";
    var suffix = suffix || "";

    var inHTML = "";
    inHTML += "<input type=\"text\" name=\"" + prefix + "mode" + suffix + "\" id=\"" + prefix + "mode" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "channelWidth" + suffix + "\" id=\"" + prefix + "channelWidth" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "channel" + suffix + "\" id=\"" + prefix + "channel" + suffix + "\">"

    var container = $(inHTML);
    input.replaceWith(container);

    $('input#' + prefix + 'mode' + suffix).combobox({
        fieldLabel: $.su.CHAR.WIRELESS.MODE,
        items: [{
                "name": $.su.CHAR.WIRELESS.MODE_N,
                "value": WLAN_MODE_11N_ONLY
            }, {
                "name": $.su.CHAR.WIRELESS.MODE_GN,
                "value": WLAN_MODE_11GN_MIXED
            }, {
                "name": $.su.CHAR.WIRELESS.MODE_BGN,
                "value": WLAN_MODE_11BGN_MIXED
            }
        ]
    }).on("ev_change", function (e, oldValue, newValue) {
        RMCCchangeMode_2g(prefix, suffix);
    });

    $('input#' + prefix + 'channelWidth' + suffix).combobox({
        fieldLabel: $.su.CHAR.WIRELESS.CHANNEL_WIDTH,
        items: [
            //{"name": $.su.CHAR.WIRELESS.AUTO, "value": "0"},
            {
                "name": $.su.CHAR.WIRELESS.MHZ20,
                "value": WLAN_CHAN_WIDTH_20M
            }, {
                "name": $.su.CHAR.WIRELESS.MHZ40,
                "value": WLAN_CHAN_WIDTH_40M
            }
        ]
    }).on('ev_change', function (e, oldValue, newValue) {
        if (newValue[0] === undefined) {
            var items = $(this).get(0).items,
                item = items[items.length - 1],
                value = item && item.value || WLAN_CHAN_WIDTH_20M;
            $(this).combobox('selectNoTrigger', value);
        }
        RMCCupdateChannelList_2g(prefix, suffix);
    });

    Common_channel($('input#' + prefix + 'channel' + suffix));
}

function RMCCchangeMode_2g(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    var oldChannelWidth = $('input#' + prefix + 'channelWidth' + suffix).combobox('getValue')[0];

    var chanWidthArray = [];
    chanWidthArray.push({
        "name": $.su.CHAR.WIRELESS.MHZ20,
        "value": WLAN_CHAN_WIDTH_20M
    });
    if (TwoGSupportHT40) {
        chanWidthArray.push({
            "name": $.su.CHAR.WIRELESS.MHZ40,
            "value": WLAN_CHAN_WIDTH_40M
        });
    }

    $('input#' + prefix + 'channelWidth' + suffix).combobox('loadData', chanWidthArray);
    if (oldChannelWidth != undefined) {
        $('input#' + prefix + 'channelWidth' + suffix).combobox('selectNoTrigger', oldChannelWidth);
    } else {
        $('input#' + prefix + 'channelWidth' + suffix).combobox('selectNoTrigger', chanWidthArray[chanWidthArray.length - 1].value);
    }

    $('input#' + prefix + 'channelWidth' + suffix).combobox(chanWidthArray.length === 1 ? "disable" : "enable");

    RMCCupdateChannelList_2g(prefix, suffix);
}

function RMCCupdateChannelList_2g(prefix, suffix) {
    var mask;
    var prefix = prefix || "";
    var suffix = suffix || "";

    var modeValue = $('input#' + prefix + 'mode' + suffix).combobox('getValue')[0];
    var chanWidthValue = $('input#' + prefix + 'channelWidth' + suffix).combobox("getValue")[0];
    var oldChannelValue = $('input#' + prefix + 'channel' + suffix).combobox("getValue")[0];
    var newChannelValue = 0;

    if (modeValue === WLAN_MODE_11N_ONLY || modeValue === WLAN_MODE_11GN_MIXED || modeValue === WLAN_MODE_11BGN_MIXED) {
        if (chanWidthValue === WLAN_CHAN_WIDTH_20M) {
            mask = FLAG_MODE_HT20;
        } else if (chanWidthValue === WLAN_CHAN_WIDTH_40M) {
            mask = FLAG_MODE_HT40_ABOVE | FLAG_MODE_HT40_BELOW;
        }
    } else if (modeValue === undefined) {
        return;
    } else {
        alert("wrong modeValue(" + modeValue + "), should not be here!");
        return;
    }

    var channelArray = [];
    var channelAuto = {
        value: 0,
        name: "Auto"
    };

    channelArray.push(channelAuto);


    $.each(rawCountryInfo, function (index, value) {
        var flag = parseInt(value.flag, 16);
        if ((flag & FLAG_2G_CHANNEL) && (flag & mask)) {
            if (flag & FLAG_DFS_CHANNEL) {
                //2G no need to DFS
            }
            var channelobj = {};
            var ch = (parseInt(value.freq, 10) - 2407) / 5;
            channelobj.value = ch;
            channelobj.name = ch.toString() + ' - ' + value.freq + 'MHz';
            channelArray.push(channelobj);
            if (oldChannelValue == channelobj.value) {
                newChannelValue = oldChannelValue;
            }
        }
    });
    $('input#' + prefix + 'channel' + suffix).combobox('loadData', channelArray);
    $('input#' + prefix + 'channel' + suffix).combobox('setValue', newChannelValue);
}

function TP_RMCC_Init_5g(prefix, suffix, element) {
    var element = element || "";
    if (element === "" || $(element).get(0) === undefined) {
        alert("EncrpytionWidget should have an element");
        return;
    }

    var input = $(element);

    var prefix = prefix || "";
    var suffix = suffix || "";

    var inHTML = "";
    inHTML += "<input type=\"text\" name=\"" + prefix + "mode-5g" + suffix + "\" id=\"" + prefix + "mode-5g" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "channelWidth-5g" + suffix + "\" id=\"" + prefix + "channelWidth-5g" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "channel-5g" + suffix + "\" id=\"" + prefix + "channel-5g" + suffix + "\">"

    var container = $(inHTML);
    input.replaceWith(container);

    $('input#' + prefix + 'mode-5g' + suffix).combobox({
        fieldLabel: $.su.CHAR.WIRELESS.MODE,
        items: [{
                "name": $.su.CHAR.WIRELESS.MODE_AC,
                "value": WLAN_MODE_11AC_ONLY
            }, {
                "name": $.su.CHAR.WIRELESS.MODE_NAC,
                "value": WLAN_MODE_11NAC_MIXED
            }, {
                "name": $.su.CHAR.WIRELESS.MODE_NAAC,
                "value": WLAN_MODE_11NAAC_MIXED
            }
        ]
    }).on("ev_change", function (e, oldValue, newValue) {
        RMCCchangeMode_5g(prefix, suffix);
    });

    $('input#' + prefix + 'channelWidth-5g' + suffix).combobox({
        fieldLabel: $.su.CHAR.WIRELESS.CHANNEL_WIDTH,
        items: [{
                "name": $.su.CHAR.WIRELESS.MHZ20,
                "value": WLAN_CHAN_WIDTH_20M
            }, {
                "name": $.su.CHAR.WIRELESS.MHZ40,
                "value": WLAN_CHAN_WIDTH_40M
            }, {
                "name": $.su.CHAR.WIRELESS.MHZ80,
                "value": WLAN_CHAN_WIDTH_80M
            }
        ]
    }).on('ev_change', function (e, oldValue, newValue) {
        if (newValue[0] === undefined) {
            var items = $(this).get(0).items,
                item = items[items.length - 1],
                value = item && item.value || WLAN_CHAN_WIDTH_20M;
            $(this).combobox('selectNoTrigger', value);
        }
        RMCCupdateChannelList_5g(prefix, suffix);
    });
    Common_channel($('input#' + prefix + 'channel-5g' + suffix));
}

function RMCCchangeMode_5g(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    var oldChannelWidth = $('input#' + prefix + 'channelWidth-5g' + suffix).combobox('getValue')[0];

    var chanWidthArray = [];
    chanWidthArray.push({
        "name": $.su.CHAR.WIRELESS.MHZ20,
        "value": WLAN_CHAN_WIDTH_20M
    });
    if (FiveGSupportHT40) {
        chanWidthArray.push({
            "name": $.su.CHAR.WIRELESS.MHZ40,
            "value": WLAN_CHAN_WIDTH_40M
        });
    }
    if (FiveGSupportHT80) {
        chanWidthArray.push({
            "name": $.su.CHAR.WIRELESS.MHZ80,
            "value": WLAN_CHAN_WIDTH_80M
        });
    }

    $('input#' + prefix + 'channelWidth-5g' + suffix).combobox('loadData', chanWidthArray);
    if (oldChannelWidth != undefined) {
        $('input#' + prefix + 'channelWidth-5g' + suffix).combobox('selectNoTrigger', oldChannelWidth);
    } else {
        $('input#' + prefix + 'channelWidth-5g' + suffix).combobox('selectNoTrigger', chanWidthArray[chanWidthArray.length - 1].value);
    }

    $('input#' + prefix + 'channelWidth-5g' + suffix).combobox(chanWidthArray.length === 1 ? "disable" : "enable");

    RMCCupdateChannelList_5g(prefix, suffix);
}

function RMCCupdateChannelList_5g(prefix, suffix) {
    var mask;
    var prefix = prefix || "";
    var suffix = suffix || "";

    var modeValue = $('input#' + prefix + 'mode-5g' + suffix).combobox('getValue')[0];
    var chanWidthValue = $('input#' + prefix + 'channelWidth-5g' + suffix).combobox("getValue")[0];
    var oldChannelValue = $('input#' + prefix + 'channel-5g' + suffix).combobox("getValue")[0];

    var autoChannelValue = WLAN_CHANNEL_AUTO;
    var newChannelValue = autoChannelValue; // equal to auto channel

    if (modeValue == undefined) return;

    if (modeValue === WLAN_MODE_11NAAC_MIXED || modeValue === WLAN_MODE_11NAC_MIXED || modeValue === WLAN_MODE_11AC_ONLY) {
        if (chanWidthValue === WLAN_CHAN_WIDTH_20M) //HT20
        {
            mask = FLAG_MODE_HT20;
        } else if (chanWidthValue === WLAN_CHAN_WIDTH_40M) //HT40
        {
            mask = FLAG_MODE_HT40_ABOVE | FLAG_MODE_HT40_BELOW;
        } else if (chanWidthValue === WLAN_CHAN_WIDTH_80M) // HT80
        {
            mask = FLAG_MODE_HT80;
        }
    } else {
        alert(" 5g list wrong modeValue(" + modeValue + "), should not be here!");
        return;
    }

    var channelArray = [];
    var channelAuto = {
        value: autoChannelValue,
        name: "Auto"
    };

    channelArray.push(channelAuto);

    $.each(rawCountryInfo, function (index, value) {
        var flag = parseInt(value.flag, 16);
        if ((flag & FLAG_5G_CHANNEL) && (flag & mask)) {
            if (flag & FLAG_DFS_CHANNEL) {
                //filter out DFS channel
                return;
            }
            var channelobj = {};
            var ch = (parseInt(value.freq, 10) - 5000) / 5;
            channelobj.value = ch;
            channelobj.name = ch.toString() + ' - ' + value.freq + 'MHz';
            channelArray.push(channelobj);
            if (oldChannelValue == channelobj.value) {
                newChannelValue = oldChannelValue;
            }
        }
    });
    $('input#' + prefix + 'channel-5g' + suffix).combobox('loadData', channelArray);
    $('input#' + prefix + 'channel-5g' + suffix).combobox('setValue', newChannelValue);
}

function init_regioninfo(region, postCb) {
    // old flag type from C5
    var IEEE80211_MODE_AUTO = 0x0001; /* autoselect */
    var IEEE80211_MODE_11A = 0x0002; /* 5GHz; OFDM */
    var IEEE80211_MODE_11B = 0x0004; /* 2GHz, CCK */
    var IEEE80211_MODE_11G = 0x0008; /* 2GHz, OFDM */
    var IEEE80211_MODE_FH = 0x0010; /* 2GHz, GFSK */
    var IEEE80211_MODE_11NA_HT80 = 0x0020; /* 5GHz, HT80 */
    var IEEE80211_MODE_TURBO_G = 0x0040; /* 2GHz, OFDM, 2x clock  dynamic turbo*/
    var IEEE80211_MODE_11NA_HT20 = 0x0080; /* 5GHz, HT20 */
    var IEEE80211_MODE_11NG_HT20 = 0x0100; /* 2GHz, HT20 */
    var IEEE80211_MODE_11NA_HT40PLUS = 0x0200; /* 5GHz, HT40 (ext ch +1) */
    var IEEE80211_MODE_11NA_HT40MINUS = 0x0400; /* 5GHz, HT40 (ext ch -1) */
    var IEEE80211_MODE_11NG_HT40PLUS = 0x0800; /* 2GHz, HT40 (ext ch +1) */
    var IEEE80211_MODE_11NG_HT40MINUS = 0x1000; /* 2GHz, HT40 (ext ch -1) */
    var IEEE80211_MODE_11NG_HT40 = 0x2000; /* 2GHz, Auto HT40 */
    var IEEE80211_MODE_11NA_HT40 = 0x4000; /* 5GHz, Auto HT40 */
    var IEEE80211_CHAN_REQUIRED_DFS = 0x8000; /* DFS channel */

    var freqlist = [0, 2412, 2417, 2422, 2427, 2432, 2437, 2442, 2447, 2452, 2457, 2462, 2467, 2472, 2477, 5080, 5100, 5150, 5170, 5180, 5190, 5200, 5210, 5220, 5230, 5240, 5250, 5260, 5280, 5300, 5320, 5350, 5400, 5500, 5520, 5540, 5560, 5580, 5600, 5620, 5640, 5660, 5680, 5700, 5745, 5765, 5785, 5805, 5825, 5920, 5940, 5960, 5980];

    var src_chlistinfo = region_chlistinfo_table[region];
    var dst_chlistinfo = [];
    var i, freq, srcflag, dstflag;

    for (i = 1; i < 52; i++) {
        srcflag = src_chlistinfo[i];
        dstflag = 0;

        if (srcflag) {
            freq = freqlist[i];

            // flag transformation
            if (srcflag & IEEE80211_CHAN_REQUIRED_DFS)
                dstflag = dstflag | FLAG_DFS_CHANNEL;
            if (freq < 5000) {
                dstflag = dstflag | FLAG_2G_CHANNEL;
                if (srcflag & (IEEE80211_MODE_11NG_HT20 | IEEE80211_MODE_11B | IEEE80211_MODE_11G | IEEE80211_MODE_FH))
                    dstflag = dstflag | FLAG_MODE_HT20;
                if (srcflag & (IEEE80211_MODE_11NG_HT40 | IEEE80211_MODE_11NG_HT40PLUS))
                    dstflag = dstflag | FLAG_MODE_HT40_ABOVE;
                if (srcflag & (IEEE80211_MODE_11NG_HT40 | IEEE80211_MODE_11NG_HT40MINUS))
                    dstflag = dstflag | FLAG_MODE_HT40_BELOW;
            } else {
                dstflag = dstflag | FLAG_5G_CHANNEL;
                if (srcflag & (IEEE80211_MODE_11NA_HT20 | IEEE80211_MODE_11A))
                    dstflag = dstflag | FLAG_MODE_HT20;
                if (srcflag & (IEEE80211_MODE_11NA_HT40 | IEEE80211_MODE_11NA_HT40PLUS))
                    dstflag = dstflag | FLAG_MODE_HT40_ABOVE;
                if (srcflag & (IEEE80211_MODE_11NA_HT40 | IEEE80211_MODE_11NA_HT40MINUS))
                    dstflag = dstflag | FLAG_MODE_HT40_BELOW;
                if (srcflag & IEEE80211_MODE_11NA_HT80)
                    dstflag = dstflag | FLAG_MODE_HT80;
            }

            if (dstflag)
                dst_chlistinfo.push({
                    'freq': freq,
                    'flag': "0x" + dstflag.toString(16)
                });
        }
    }

    postCb(dst_chlistinfo);
}
/*************************************   end    ****************************************************/

/************************* Encryption Function ********************************************/

function EncryptionPSKHide(prefix, suffix, show) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    if (show === "show") {
        WidgetsBox[prefix + 'WPA-PSK-module' + suffix].show();

        WidgetsBox[prefix + 'pskVersion' + suffix].radio('enable');
        WidgetsBox[prefix + 'pskEncryption' + suffix].radio('enable');
        WidgetsBox[prefix + 'pskPassword' + suffix].textbox('enable');
        WidgetsBox[prefix + 'pskGroupKeyUpdatePeriod' + suffix].textbox('enable');
    } else if (show === "hide") {
        WidgetsBox[prefix + 'WPA-PSK-module' + suffix].hide();

        WidgetsBox[prefix + 'pskVersion' + suffix].radio('disable');
        WidgetsBox[prefix + 'pskEncryption' + suffix].radio('disable');
        WidgetsBox[prefix + 'pskPassword' + suffix].textbox('disable');
        WidgetsBox[prefix + 'pskGroupKeyUpdatePeriod' + suffix].textbox('disable');
    }
}

function EncryptionWPAHide(prefix, suffix, show) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    //$('div#WPA-ENTERPRISE-module').hide();

    if (show === "hide") {
        WidgetsBox[prefix + 'WPA-ENTERPRISE-module' + suffix].hide();

        WidgetsBox[prefix + 'wpaVersion' + suffix].radio('disable');
        WidgetsBox[prefix + 'wpaEncryption' + suffix].radio('disable');
        WidgetsBox[prefix + 'radiusServerIp' + suffix].textbox('disable');
        WidgetsBox[prefix + 'radiusPort' + suffix].textbox('disable');
        WidgetsBox[prefix + 'radiusPassword' + suffix].textbox('disable');
        WidgetsBox[prefix + 'wpaGroupKeyUpdatePeriod' + suffix].textbox('disable');
    } else if (show === "show") {
        WidgetsBox[prefix + 'WPA-ENTERPRISE-module' + suffix].show();

        WidgetsBox[prefix + 'wpaVersion' + suffix].radio('enable');
        WidgetsBox[prefix + 'wpaEncryption' + suffix].radio('enable');
        WidgetsBox[prefix + 'radiusServerIp' + suffix].textbox('enable');
        WidgetsBox[prefix + 'radiusPort' + suffix].textbox('enable');
        WidgetsBox[prefix + 'radiusPassword' + suffix].textbox('enable');
        WidgetsBox[prefix + 'wpaGroupKeyUpdatePeriod' + suffix].textbox('enable');
    }
}


function EncryptionWEPHide(prefix, suffix, show) {
    var prefix = prefix || "";
    var suffix = suffix || "";


    if (show === "hide") {
        WidgetsBox[prefix + 'WEP-module' + suffix].hide();

        WidgetsBox[prefix + 'wepAuthType' + suffix].radio('disable');
        WidgetsBox[prefix + 'wepKeySlt' + suffix].combobox('disable');

        WEPKeyHide(prefix, "1" + suffix, "hide");
        WEPKeyHide(prefix, "2" + suffix, "hide");
        WEPKeyHide(prefix, "3" + suffix, "hide");
        WEPKeyHide(prefix, "4" + suffix, "hide");

    } else if (show === "show") {
        WidgetsBox[prefix + 'WEP-module' + suffix].show();

        WidgetsBox[prefix + 'wepAuthType' + suffix].radio('enable');
        WidgetsBox[prefix + 'wepKeySlt' + suffix].combobox('enable');

        WEPKeyHide(prefix, "1" + suffix, "hide");
        WEPKeyHide(prefix, "2" + suffix, "hide");
        WEPKeyHide(prefix, "3" + suffix, "hide");
        WEPKeyHide(prefix, "4" + suffix, "hide");

        var keySelect = WidgetsBox[prefix + 'wepKeySlt' + suffix].combobox('getValue');

        WEPKeyHide(prefix, keySelect + suffix, "show"); // show the wep selected key 
    }
}

function WEPKeyHide(prefix, suffix, show) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    if (show === "hide") {
        WidgetsBox[prefix + 'wepkey' + suffix].hide();

        WidgetsBox[prefix + 'wepKeyFormat' + suffix].radio('disable');
        WidgetsBox[prefix + 'wepType' + suffix].radio('disable');
        WidgetsBox[prefix + 'wepKeyText' + suffix].textbox('disable');
    } else if (show === "show") {
        WidgetsBox[prefix + 'wepkey' + suffix].show();

        WidgetsBox[prefix + 'wepKeyFormat' + suffix].radio('enable');
        WidgetsBox[prefix + 'wepType' + suffix].radio('enable');
        WidgetsBox[prefix + 'wepKeyText' + suffix].textbox('enable');
    }
}


function EncryptionWepMaxLength(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    var keyFormat = WidgetsBox[prefix + 'wepKeyFormat' + suffix].radio("getValue");
    var keyType = WidgetsBox[prefix + 'wepType' + suffix].radio("getValue");

    var keyValue = WidgetsBox[prefix + 'wepKeyText' + suffix];

    if (keyFormat === "")
        return;
    if (keyType === "")
        return;

    if (keyFormat === "0") {
        switch (keyType) {
        case WLAN_PRIVACY_WEP_TYPE_64:
            keyValue.attr('maxlength', "5");
            keyValue.val(keyValue.val().substring(0, 5));
            break;
        case WLAN_PRIVACY_WEP_TYPE_128:
            keyValue.attr('maxlength', "13");
            keyValue.val(keyValue.val().substring(0, 13));
            break;
        case WLAN_PRIVACY_WEP_TYPE_152:
            keyValue.attr('maxlength', "16");
            keyValue.val(keyValue.val().substring(0, 16));
            break;
        }
    } else if (keyFormat === "1") {
        switch (keyType) {
        case WLAN_PRIVACY_WEP_TYPE_64:
            keyValue.attr('maxlength', "10");
            keyValue.val(keyValue.val().substring(0, 10));
            break;
        case WLAN_PRIVACY_WEP_TYPE_128:
            keyValue.attr('maxlength', "26");
            keyValue.val(keyValue.val().substring(0, 26));
            break;
        case WLAN_PRIVACY_WEP_TYPE_152:
            keyValue.attr('maxlength', "32");
            keyValue.val(keyValue.val().substring(0, 32));
            break;
        }
    }

    if (keyValue.val() != "")
        keyValue.textbox("validate");
}

function EncryptionWepInit(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    WidgetsBox[prefix + 'wepkey' + suffix] = $('div#' + prefix + 'wepkey' + suffix);

    WidgetsBox[prefix + 'wepKeyFormat' + suffix] = $('input#' + prefix + 'wepKeyFormat' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.WEP_KEY_FORMAT,
        columns: 3,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.ASCII,
                inputValue: "0"
            }, {
                boxlabel: $.su.CHAR.WIRELESS.HEXADECIMAL,
                inputValue: "1"
            }
        ]
    }).on("ev_change", function (e, oldValue, newValue) {
        EncryptionWepMaxLength(prefix, suffix);
    });

    // 让radio对齐.
    $("input[name=\"" + prefix + "wepKeyFormat" + suffix + "\"].radio-radio").eq(0).closest("label").css("width", "56px");

    WidgetsBox[prefix + 'wepType' + suffix] = $('input#' + prefix + 'wepType' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.KEY_TYPE,
        columns: 2,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.BIT64,
                inputValue: WLAN_PRIVACY_WEP_TYPE_64
            }, {
                boxlabel: $.su.CHAR.WIRELESS.BIT128,
                inputValue: WLAN_PRIVACY_WEP_TYPE_128
            }
        ]
    }).on("ev_change", function (e, oldValue, newValue) {
        EncryptionWepMaxLength(prefix, suffix);
    });

    // 让radio对齐.
    $("input[name=\"" + prefix + "wepType" + suffix + "\"].radio-radio").eq(0).closest("label").css("width", "56px");

    WidgetsBox[prefix + 'wepKeyText' + suffix] = $('input#' + prefix + 'wepKeyText' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.KEY_VALUE,
        allowBlank: false,
        autoTrim: false,
        /*do not trim the password*/
        validator: function (target) {
            var Hex64Regex = /^[0-9A-Fa-f]{10}$/;
            var Hex128Regex = /^[0-9A-Fa-f]{26}$/;
            var Hex152Regex = /^[0-9A-Fa-f]{32}$/;

            var ASCII64Regex = /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{5}$/;
            var ASCII128Regex = /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{13}$/;
            var ASCII152Regex = /^[A-Za-z0-9\`\~\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\\\|\/\?\.\,\<\>\ ]{16}$/;

            var ASCIITest = /^\S$/;

            var iRegex = /^.*$/; // match all
            var keyFormat = WidgetsBox[prefix + 'wepKeyFormat' + suffix].radio('getValue');
            var keyType = WidgetsBox[prefix + 'wepType' + suffix].radio('getValue');
            if (keyFormat === "0") {
                switch (keyType) {
                case WLAN_PRIVACY_WEP_TYPE_64:
                    iRegex = ASCII64Regex;
                    break;
                case WLAN_PRIVACY_WEP_TYPE_128:
                    iRegex = ASCII128Regex;
                    break;
                case WLAN_PRIVACY_WEP_TYPE_152:
                    iRegex = ASCII152Regex;
                    break;
                }
            } else if (keyFormat === "1") {
                switch (keyType) {
                case WLAN_PRIVACY_WEP_TYPE_64:
                    iRegex = Hex64Regex;
                    break;
                case WLAN_PRIVACY_WEP_TYPE_128:
                    iRegex = Hex128Regex;
                    break;
                case WLAN_PRIVACY_WEP_TYPE_152:
                    iRegex = Hex152Regex;
                    break;
                }
            }


            if (iRegex.test(target) === true) {
                return true;
            } else {
                return false;
            }
        }
    });

    /*
    $('div#'+prefix+'wepkey' + suffix).fieldset({
        fields : [
            {name : prefix + 'wepKeyFormat' + suffix},
            {name : prefix + 'wepType' + suffix},
            {name : prefix + 'wepKeyText' + suffix}
        ]
    })
    */
}

var WidgetsBox = new Object();

function ClearWidgetsBox() {
    WidgetsBox = null;
    WidgetsBox = new Object();
}

function EncryptionPskConf(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    WidgetsBox[prefix + 'WPA-PSK-module' + suffix] = $('div#' + prefix + 'WPA-PSK-module' + suffix);

    WidgetsBox[prefix + 'pskVersion' + suffix] = $('input#' + prefix + 'pskVersion' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.VERSION,
        columns: 3,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.AUTO,
                inputValue: WLAN_PRIVACY_PSKVERSION_AUTO
            }, {
                boxlabel: $.su.CHAR.WIRELESS.WPA_PSK,
                inputValue: WLAN_PRIVACY_PSKVERSION_WPA_PSK
            }, {
                boxlabel: $.su.CHAR.WIRELESS.WPA2_PSK,
                inputValue: WLAN_PRIVACY_PSKVERSION_WPA2_PSK
            }
        ]
    })

    // 让radio对齐.
    $("input[name=\"" + prefix + "pskVersion" + suffix + "\"].radio-radio").eq(1).closest("label").css("width", "78px");

    WidgetsBox[prefix + 'pskEncryption' + suffix] = $('input#' + prefix + 'pskEncryption' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.ENCRYPTION,
        columns: 3,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.AUTO,
                inputValue: WLAN_PRIVACY_PSKENCRYPTION_AUTO
            }, {
                boxlabel: $.su.CHAR.WIRELESS.AES,
                inputValue: WLAN_PRIVACY_PSKENCRYPTION_AES
            }, {
                boxlabel: $.su.CHAR.WIRELESS.TKIP,
                inputValue: WLAN_PRIVACY_PSKENCRYPTION_TKIP
            }
        ]
    })

    // 让radio对齐.
    $("input[name=\"" + prefix + "pskEncryption" + suffix + "\"].radio-radio").eq(1).closest("label").css("width", "78px");

    WidgetsBox[prefix + 'pskPassword' + suffix] = $('input#' + prefix + 'pskPassword' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.WIRELESS_PASSWORD,
        allowBlank: false,
        autoTrim: false,
        /*do not trim the password*/
        vtype: "wlanpsk",
        maxLength: 64
    })

    WidgetsBox[prefix + 'pskGroupKeyUpdatePeriod' + suffix] = $('input#' + prefix + 'pskGroupKeyUpdatePeriod' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.GKEY_UPDATE,
        allowBlank: false,
        //autoTrim:false,  /*do not trim the password*/
        vtype: "number"
    })
}


function EncryptionWpaConf(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    WidgetsBox[prefix + 'WPA-ENTERPRISE-module' + suffix] = $('div#' + prefix + 'WPA-ENTERPRISE-module' + suffix);

    WidgetsBox[prefix + 'wpaVersion' + suffix] = $('input#' + prefix + 'wpaVersion' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.VERSION,
        columns: 3,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.AUTO,
                inputValue: WLAN_PRIVACY_WPAVERSION_AUTO
            }, {
                boxlabel: $.su.CHAR.WIRELESS.WPA,
                inputValue: WLAN_PRIVACY_WPAVERSION_WPA
            }, {
                boxlabel: $.su.CHAR.WIRELESS.WPA2,
                inputValue: WLAN_PRIVACY_WPAVERSION_WPA2
            }
        ]
    });
    // 让radio对齐.
    $("input[name=\"" + prefix + "wpaVersion" + suffix + "\"].radio-radio").eq(1).closest("label").css("width", "49px")

    WidgetsBox[prefix + 'wpaEncryption' + suffix] = $('input#' + prefix + 'wpaEncryption' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.ENCRYPTION,
        columns: 3,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.AUTO,
                inputValue: WLAN_PRIVACY_WPAENCRYPTION_AUTO
            }, {
                boxlabel: $.su.CHAR.WIRELESS.AES,
                inputValue: WLAN_PRIVACY_WPAENCRYPTION_AES
            }, {
                boxlabel: $.su.CHAR.WIRELESS.TKIP,
                inputValue: WLAN_PRIVACY_WPAENCRYPTION_TKIP
            }
        ]
    });

    // 让radio对齐.
    $("input[name=\"" + prefix + "wpaEncryption" + suffix + "\"].radio-radio").eq(1).closest("label").css("width", "49px")

    WidgetsBox[prefix + 'radiusServerIp' + suffix] = $('input#' + prefix + 'radiusServerIp' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.RADIUS_SERVER_IP,
        allowBlank: false,
        //autoTrim:false,  /*do not trim the password*/
        vtype: "ip"
    });

    WidgetsBox[prefix + 'radiusPort' + suffix] = $('input#' + prefix + 'radiusPort' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.RADIUS_PORT,
        allowBlank: false,
        //autoTrim:false,  /*do not trim the password*/
        vtype: "number"
    });

    WidgetsBox[prefix + 'radiusPassword' + suffix] = $('input#' + prefix + 'radiusPassword' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.RADIUS_PASSWORD,
        allowBlank: false,
        autoTrim: false,
        /*do not trim the password*/
        vtype: "wlanwpa",
        maxLength : 64
    });


    WidgetsBox[prefix + 'wpaGroupKeyUpdatePeriod' + suffix] = $('input#' + prefix + 'wpaGroupKeyUpdatePeriod' + suffix).textbox({
        fieldLabel: $.su.CHAR.WIRELESS.GKEY_UPDATE,
        allowBlank: false,
        //autoTrim:false,  /*do not trim the password*/
        vtype: "number"
    });
}

function EncryptionWEPConf(prefix, suffix) {
    var prefix = prefix || "";
    var suffix = suffix || "";

    WidgetsBox[prefix + 'WEP-module' + suffix] = $('div#' + prefix + 'WEP-module' + suffix);

    WidgetsBox[prefix + 'wepAuthType' + suffix] = $('input#' + prefix + 'wepAuthType' + suffix).radio({
        fieldLabel: $.su.CHAR.WIRELESS.TYPE,
        columns: 3,
        items: [{
                boxlabel: $.su.CHAR.WIRELESS.AUTO,
                inputValue: WLAN_PRIVACY_AUTHTYPE_AUTO
            }, {
                boxlabel: $.su.CHAR.WIRELESS.OPEN_SYSTEM,
                inputValue: WLAN_PRIVACY_AUTHTYPE_OPEN_SYSTEM
            }, {
                boxlabel: $.su.CHAR.WIRELESS.SHARED_KEY,
                inputValue: WLAN_PRIVACY_AUTHTYPE_SHARE_DKEY
            }
        ]
    });

    // 让radio对齐.
    $("input[name=\"" + prefix + "wepAuthType" + suffix + "\"].radio-radio").eq(0).closest("label").css("width", "56px");

    WidgetsBox[prefix + 'wepKeySlt' + suffix] = $('input#' + prefix + 'wepKeySlt' + suffix).combobox({
        fieldLabel: $.su.CHAR.WIRELESS.KEY_SELECTED,
        items: [{
                "name": $.su.CHAR.WIRELESS.KEY1,
                "value": "1"
            }, {
                "name": $.su.CHAR.WIRELESS.KEY2,
                "value": "2"
            }, {
                "name": $.su.CHAR.WIRELESS.KEY3,
                "value": "3"
            }, {
                "name": $.su.CHAR.WIRELESS.KEY4,
                "value": "4"
            }
        ]
    }).on('ev_change', function (e, oldValue, newValue) {

        var securityMode = WidgetsBox[prefix + 'securityMode' + suffix].combobox("getValue")[0];

        if (securityMode === undefined) {
            //console.log("value not set .......");
            return;
        }
        if (securityMode != WLAN_PRIVACY_MODE_WEP) {
            //console.log("not WEP");
            return;
        }

        WEPKeyHide(prefix, "1" + suffix, "hide");
        WEPKeyHide(prefix, "2" + suffix, "hide");
        WEPKeyHide(prefix, "3" + suffix, "hide");
        WEPKeyHide(prefix, "4" + suffix, "hide");
        switch (newValue[0]) {
        case '1':
            WEPKeyHide(prefix, "1" + suffix, "show");
            break;
        case '2':
            WEPKeyHide(prefix, "2" + suffix, "show");
            break;
        case '3':
            WEPKeyHide(prefix, "3" + suffix, "show");
            break;
        case '4':
            WEPKeyHide(prefix, "4" + suffix, "show");
            break;
        }
        $.su.layout.doLayout();
    }).combobox("hide");

    EncryptionWepInit(prefix, '1' + suffix);
    EncryptionWepInit(prefix, '2' + suffix);
    EncryptionWepInit(prefix, '3' + suffix);
    EncryptionWepInit(prefix, '4' + suffix);

    WidgetsBox[prefix + 'wepKeySlt' + suffix].combobox("setValue", "1");
}

function EncryptionWidget(defaults, options, prefix, suffix, element, WithEnterprise) {

    var element = element || "";
    if (element === "" || $(element).get(0) === undefined) {
        alert("EncrpytionWidget should have an element");
        return;
    }

    var input = $(element);

    var prefix = prefix || "";
    var suffix = suffix || "";


    var inHTML = "";
    inHTML += "<input type=\"text\" name=\"" + prefix + "securityMode" + suffix + "\" id=\"" + prefix + "securityMode" + suffix + "\">"
    inHTML += "<div id=\"" + prefix + "WPA-PSK-module" + suffix + "\">";
    inHTML += "<fieldset class=\"fieldsetStyle\">";
    inHTML += "<div class=\"securityContent\">";
    inHTML += "<input type=\"text\" name=\"" + prefix + "pskVersion" + suffix + "\" id=\"" + prefix + "pskVersion" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "pskEncryption" + suffix + "\" id=\"" + prefix + "pskEncryption" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "pskPassword" + suffix + "\" id=\"" + prefix + "pskPassword" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "pskGroupKeyUpdatePeriod" + suffix + "\" id=\"" + prefix + "pskGroupKeyUpdatePeriod" + suffix + "\">"
    inHTML += "</div>"
    inHTML += "</fieldset>"
    inHTML += "</div>"
    inHTML += "<div id=\"" + prefix + "WPA-ENTERPRISE-module" + suffix + "\">"
    inHTML += "<fieldset class=\"fieldsetStyle\">"
    inHTML += "<div class=\"securityContent\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wpaVersion" + suffix + "\" id=\"" + prefix + "wpaVersion" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wpaEncryption" + suffix + "\" id=\"" + prefix + "wpaEncryption" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "radiusServerIp" + suffix + "\" id=\"" + prefix + "radiusServerIp" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "radiusPort" + suffix + "\" id=\"" + prefix + "radiusPort" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "radiusPassword" + suffix + "\" id=\"" + prefix + "radiusPassword" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wpaGroupKeyUpdatePeriod" + suffix + "\" id=\"" + prefix + "wpaGroupKeyUpdatePeriod" + suffix + "\">"
    inHTML += "</div>"
    inHTML += "</fieldset>"
    inHTML += "</div>"
    inHTML += "<div id=\"" + prefix + "WEP-module" + suffix + "\">"
    inHTML += "<fieldset class=\"fieldsetStyle\">"
    inHTML += "<div class=\"securityContent\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepAuthType" + suffix + "\" id=\"" + prefix + "wepAuthType" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeySlt" + suffix + "\" id=\"" + prefix + "wepKeySlt" + suffix + "\">"
    inHTML += "<div id=\"" + prefix + "wepkey1" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyFormat1" + suffix + "\" id=\"" + prefix + "wepKeyFormat1" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepType1" + suffix + "\" id=\"" + prefix + "wepType1" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyText1" + suffix + "\" id=\"" + prefix + "wepKeyText1" + suffix + "\">"
    inHTML += "</div>"
    inHTML += "<div id=\"" + prefix + "wepkey2" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyFormat2" + suffix + "\" id=\"" + prefix + "wepKeyFormat2" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepType2" + suffix + "\" id=\"" + prefix + "wepType2" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyText2" + suffix + "\" id=\"" + prefix + "wepKeyText2" + suffix + "\">"
    inHTML += "</div>"
    inHTML += "<div id=\"" + prefix + "wepkey3" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyFormat3" + suffix + "\" id=\"" + prefix + "wepKeyFormat3" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepType3" + suffix + "\" id=\"" + prefix + "wepType3" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyText3" + suffix + "\" id=\"" + prefix + "wepKeyText3" + suffix + "\">"
    inHTML += "</div>"
    inHTML += "<div id=\"" + prefix + "wepkey4" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyFormat4" + suffix + "\" id=\"" + prefix + "wepKeyFormat4" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepType4" + suffix + "\" id=\"" + prefix + "wepType4" + suffix + "\">"
    inHTML += "<input type=\"text\" name=\"" + prefix + "wepKeyText4" + suffix + "\" id=\"" + prefix + "wepKeyText4" + suffix + "\">"
    inHTML += "</div>"
    inHTML += "</div>"
    inHTML += "</fieldset>"
    inHTML += "</div>"

    var container = $(inHTML);
    input.replaceWith(container);

    var securityItems = [{
            "name": $.su.CHAR.WIRELESS.WIRELESS_SEC_NONE,
            "value": WLAN_PRIVACY_MODE_NONE
        }, {
            "name": $.su.CHAR.WIRELESS.WIRELESS_SEC_WPA,
            "value": WLAN_PRIVACY_MODE_PSK_PSK2
        }
    ];
    if (WithEnterprise !== false) {
        securityItems.push({
            "name": $.su.CHAR.WIRELESS.WIRELESS_SEC_WPA_ENTER,
            "value": WLAN_PRIVACY_MODE_WPA_WPA2
        });
    }
    securityItems.push({
        "name": $.su.CHAR.WIRELESS.WIRELESS_SEC_WEP,
        "value": WLAN_PRIVACY_MODE_WEP
    });
    WidgetsBox[prefix + 'securityMode' + suffix] = $('input#' + prefix + 'securityMode' + suffix).combobox({
        fieldLabel: $.su.CHAR.WIRELESS.SECURITY,
        //inputCls: "xl",
        items: securityItems
        /*
        [
            {"name": $.su.CHAR.WIRELESS.WIRELESS_SEC_NONE, "value": "0"},
            {"name": $.su.CHAR.WIRELESS.WIRELESS_SEC_WPA, "value": "1"},
            //{"name": $.su.CHAR.WIRELESS.WIRELESS_SEC_WPA_ENTER, "value": "2"},
            {"name": $.su.CHAR.WIRELESS.WIRELESS_SEC_WEP, "value": "3"}
        ]
        */
    }).on("ev_change", function (e, oldValue, newValue) {
        EncryptionPSKHide(prefix, suffix, "hide");
        EncryptionWPAHide(prefix, suffix, "hide");
        EncryptionWEPHide(prefix, suffix, "hide");
        switch (newValue[0]) {
        case WLAN_PRIVACY_MODE_NONE:
            break;
        case WLAN_PRIVACY_MODE_PSK_PSK2:
            EncryptionPSKHide(prefix, suffix, "show");
            break;
        case WLAN_PRIVACY_MODE_WPA_WPA2:
            EncryptionWPAHide(prefix, suffix, "show");
            break;
        case WLAN_PRIVACY_MODE_WEP:
            EncryptionWEPHide(prefix, suffix, "show");
            break;
        }
        $.su.layout.doLayout();
    });

    EncryptionPskConf(prefix, suffix);
    EncryptionWpaConf(prefix, suffix);
    EncryptionWEPConf(prefix, suffix);

    if (WithEnterprise === false) {
        WidgetsBox[prefix + 'pskGroupKeyUpdatePeriod' + suffix].textbox('hide');
    }

    // select one item to hide other 
    WidgetsBox[prefix + 'securityMode' + suffix].combobox("setValue", WLAN_PRIVACY_MODE_NONE);
}

/********************* for repeater mode **************************************/
function EncryptionWidgetCopy(srcId, dstId, widget) {
    var tar = $('input#' + srcId);
    var method = $("input#" + srcId).get(0).xtype;
    $('input#' + dstId)[method]("setValue", tar[method]("getValue"));
}

function EncryptionCopy(srcPrefix, srcSuffix, dstPrefix, dstSuffix) {
    EncryptionWidgetCopy(srcPrefix + "securityMode" + srcSuffix, dstPrefix + "securityMode" + dstSuffix);

    EncryptionWidgetCopy(srcPrefix + "pskVersion" + srcSuffix, dstPrefix + "pskVersion" + dstSuffix);
    EncryptionWidgetCopy(srcPrefix + "pskEncryption" + srcSuffix, dstPrefix + "pskEncryption" + dstSuffix);
    EncryptionWidgetCopy(srcPrefix + "pskPassword" + srcSuffix, dstPrefix + "pskPassword" + dstSuffix);
    EncryptionWidgetCopy(srcPrefix + "pskGroupKeyUpdatePeriod" + srcSuffix, dstPrefix + "pskGroupKeyUpdatePeriod" + dstSuffix);

    EncryptionWidgetCopy(srcPrefix + "wepAuthType" + srcSuffix, dstPrefix + "wepAuthType" + dstSuffix);
    EncryptionWidgetCopy(srcPrefix + "wepKeySlt" + srcSuffix, dstPrefix + "wepKeySlt" + dstSuffix);

    var i = 1;
    for (i = 1; i <= 4; i++) {
        EncryptionWidgetCopy(srcPrefix + "wepKeyFormat" + i + srcSuffix, dstPrefix + "wepKeyFormat" + i + dstSuffix);
        EncryptionWidgetCopy(srcPrefix + "wepType" + i + srcSuffix, dstPrefix + "wepType" + i + dstSuffix);
        EncryptionWidgetCopy(srcPrefix + "wepKeyText" + i + srcSuffix, dstPrefix + "wepKeyText" + i + dstSuffix);

        var tar = $("input#" + dstPrefix + "wepKeyText" + i + dstSuffix);
        var method = $("input#" + dstPrefix + "wepKeyText" + i + dstSuffix).get(0).xtype;
        tar[method]("validate");
        //      $("input#" + dstPrefix + "wepKeyText" + i + dstSuffix).textbox("validate");
    }
}
/***************************** end ********************************************/
