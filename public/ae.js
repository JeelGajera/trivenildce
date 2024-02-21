jQuery(document).ready(function () {
  var ae_GetURLParameter = function () {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    var obj = [];
    var sParameterName;
    var paramname;
    var paramvar;
    for (var i = 1; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
      paramname = sParameterName[1];
      paramvar = sParameterName[0];
      obj.push({ [paramvar]: paramname });
    }
    sParameterName = sURLVariables[0].split("=");
    paramname = sParameterName[1];
    paramvar = sParameterName[0];
    obj.push({ [paramvar]: paramname });

    paramname = "plugin-" + window.location.host;
    paramvar = "ref";
    obj.push({ [paramvar]: paramname });

    return obj;
  };
  window.ae_plugin_lib_button_init = function () {
    try {
      (function (w, jQuery) {
        if (typeof jQuery !== "undefined") {
          var params = {
              hide_details: 0,
              auto_fill: 1,
              only_form: 1,
              platform: "popup-modal",
            },
            req_cache = [],
            lib_loaded = false,
            ae_btn_text = "";
          var utmfromfun = ae_GetURLParameter();
          utmfromfun.forEach((utmname) => {
            const entries = Object.entries(utmname);
            params[entries[0][0]] = entries[0][1];
          });
          w.open_ae_ticket_modal = function (event_id, ticket_id, e) {
            jQuery(e.target).attr("disabled", "disabled");
            ae_btn_text = jQuery(e.target).html();
            jQuery(e.target).text("Please wait...");
            if (typeof ticket_id !== "0") {
              params.r_ticketid = ticket_id;
              params.r_qty = 1;
            }
            if (typeof AE !== "undefined") {
              AE.showTicketModal(event_id, params);
            } else if (lib_loaded === false) {
              req_cache.push({
                event_id: event_id,
                ticket_id: ticket_id,
                event: e,
              });
            } else {
              console.log("Problem loading ae library");
            }
            setTimeout(function () {
              jQuery(e.target).removeAttr("disabled");
              jQuery(e.target).html(ae_btn_text);
              ae_btn_text = "";
            }, 5000);
          };

          jQuery.getScript(
            "//allevents.in/scripts/public/ae-plugin-lib.js",
            function () {
              lib_loaded = true;
              if (req_cache.length > 0) {
                w.open_ae_ticket_modal(
                  req_cache[0].event_id,
                  req_cache[0].ticket_id,
                  req_cache[0].event
                );
                req_cache = [];
              }
            }
          );

          //function to bind click event
          var bind_ticket_book_click_event = function () {
            try {
              console.log("binding the event...");
              jQuery(".ae-ticket-book-button")
                .off("click.aeb")
                .on("click.aeb", function (e) {
                  console.log("Opening booking widget...");
                  if (jQuery(this).data("event-id") != undefined) {
                    var eventId = jQuery(this).data("event-id");
                    var ticketId = jQuery(this).data("ticket-id");
                    if (ticketId == undefined) ticketId = 0;
                    w.open_ae_ticket_modal(eventId, ticketId, event);
                  }
                });
            } catch (e) {
              console.log(e);
            }
          };

          //binding on click event with multiple attempts
          bind_ticket_book_click_event();
          setTimeout(bind_ticket_book_click_event, 3000);
          setTimeout(bind_ticket_book_click_event, 5000);
          setTimeout(bind_ticket_book_click_event, 10000);
          setTimeout(bind_ticket_book_click_event, 20000);
        } else console.log("jQuery is Required.");
      })(window, jQuery);

      clearInterval(window.ae_plugin_lib_button_interval);
    } catch (e) {
      console.log(e);
    }
  };

  if (typeof jQuery === "undefined") {
    window.ae_plugin_lib_jqcheck_attempt = 1;
    window.ae_plugin_lib_button_interval = setInterval(function () {
      //console.log("retrying to init aelib.");
      window.ae_plugin_lib_button_init();

      try {
        //load jquery from external script if not found on page
        if (
          window.ae_plugin_lib_jqcheck_attempt % 5 == 0 &&
          typeof jQuery == "undefined"
        ) {
          console.log("Loading jQuery...");
          var headTag = document.getElementsByTagName("head")[0];
          var jqTag = document.createElement("script");
          jqTag.type = "text/javascript";
          jqTag.src = "https://code.jquery.com/jquery-3.6.0.min.js";
          headTag.appendChild(jqTag);
        }

        window.ae_plugin_lib_jqcheck_attempt++;
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  } else {
    window.ae_plugin_lib_button_init();
  }
});
