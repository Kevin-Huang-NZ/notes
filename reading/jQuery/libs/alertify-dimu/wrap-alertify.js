  function _alert(_txt) {
      alertify.alert(_txt);
  }

  function _alertEx(_txt, _time) {
      alertify.log(_txt, "info", _time);
  }

  function _confirm(_tip, param, _funSuccess) {
      var _param = param;
      alertify.confirm(_tip, function(e) {
          if (e) {
              _funSuccess(_param);
              //alertify.log("user clicked ok", "", 5000);
          } else {

          }
      });
  }

  function _confirmEx(_tip, param, _funSuccess, _funFailed) {
      var _param = param;
      alertify.confirm(_tip, function(e) {
          if (e) {
              _funSuccess(_param);
              //alertify.log("user clicked ok", "", 5000);
          } else {
              //alert("user clicked cancel");
              //alertify.success("Success notification");
              _funFailed(_param);
          }
      });
  }

  function _notify(_tip, _timeout) {
      if (_timeout === 0) {
          alertify.log(_tip, "", 5000);
      } else {
          alertify.log(_tip, "", _timeout);
      }
  }



  function _prompt(_tip, _funSuccess, _defaultVal) {
      alertify.prompt(_tip, _funSuccess, _defaultVal);
  }



  function _alertCountDown(_txt, delay, fn) {
      var timeoutId = null;
      var _this = alertify.alert(_txt, function(fn) {
          clearTimeout(timeoutId);
          if (typeof fn === "function") {
              fn();
          }
      });
      var delayTime = 2000;
      if (typeof delay !== "undefined") {
          delayTime = delay;
      }

      if (typeof delayTime === "number" && delayTime > 0) {
          timeoutId = setTimeout(function() {
              console.log(_this);
              _this.hide();
              //   $("#alertify").remove();
              //   $("#alertify-cover").remove();
              //   $("#alertify-logs").remove();
              if (typeof fn === "function") {
                  fn();
              }
          }, delayTime);

          createCountDown(Math.round(delayTime / 1000), $("#alertify-ok"));
      }
  }

  function createCountDown(num, target) {
      var countDownSpan = $("<span style='display:inline-block;'>&nbsp;&nbsp;</span><span style='display:inline-block;' id='countDown'>" + num + "</span><span style='display:inline-block;'>s</span>");
      target.append(countDownSpan);
      var intervalId = setInterval(function() {
          var newNum = $("#countDown").text() - 1;
          $("#countDown").text(newNum);
          if (newNum <= 0) {
              clearInterval(intervalId);
          }
      }, 1000);
  }