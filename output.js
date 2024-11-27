//Wed Nov 27 2024 11:49:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a1) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a4) {
      {
        return typeof a4;
      }
    } : function (a4) {
      {
        return a4 && "function" == typeof Symbol && a4.constructor === Symbol && a4 !== Symbol.prototype ? "symbol" : typeof a4;
      }
    };
    return b(a1);
  }
  function c(a1, a2) {
    {
      var a4 = "undefined" != typeof Symbol && a1[Symbol.iterator] || a1["@@iterator"];
      if (!a4) {
        {
          if (Array.isArray(a1) || (a4 = d(a1)) || a2 && a1 && "number" == typeof a1.length) {
            {
              a4 && (a1 = a4);
              var a5 = 0;
              var a6 = function () {};
              return {
                s: a6,
                n: function () {
                  {
                    var ad = {
                      done: true
                    };
                    return a5 >= a1.length ? ad : {
                      done: false,
                      value: a1[a5++]
                    };
                  }
                },
                e: function (ac) {
                  {
                    throw ac;
                  }
                },
                f: a6
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var a7;
      var a8 = true;
      var a9 = false;
      return {
        s: function () {
          {
            a4 = a4.call(a1);
          }
        },
        n: function () {
          {
            var ae = a4.next();
            a8 = ae.done;
            return ae;
          }
        },
        e: function (ad) {
          {
            a9 = true;
            a7 = ad;
          }
        },
        f: function () {
          {
            try {
              a8 || null == a4.return || a4.return();
            } finally {
              if (a9) {
                throw a7;
              }
            }
          }
        }
      };
    }
  }
  function d(a1, a2) {
    {
      if (a1) {
        {
          if ("string" == typeof a1) {
            return f(a1, a2);
          }
          var a4 = {}.toString.call(a1).slice(8, -1);
          "Object" === a4 && a1.constructor && (a4 = a1.constructor.name);
          return "Map" === a4 || "Set" === a4 ? Array.from(a1) : "Arguments" === a4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a4) ? f(a1, a2) : undefined;
        }
      }
    }
  }
  function f(a1, a2) {
    {
      (null == a2 || a2 > a1.length) && (a2 = a1.length);
      for (var a3 = 0, a4 = Array(a2); a3 < a2; a3++) {
        a4[a3] = a1[a3];
      }
      return a4;
    }
  }
  function g() {
    "use strict";

    var a1 = {
      TiagF: function (ay, az) {
        return ay !== az;
      },
      znemO: "qMMLs",
      zaQoW: function (ay) {
        return ay();
      },
      IVqmm: "string",
      uunzb: function (ay, az) {
        return ay === az;
      },
      aBFVl: "Object",
      kxxzP: "Map",
      CHneg: function (ay, az, aA) {
        return ay(az, aA);
      },
      CudyB: "XFuTy",
      FHGdU: "ZbWec",
      zQMAN: function (ay, az) {
        return ay == az;
      },
      vjwNv: "function",
      MTHsu: function (ay, az) {
        return ay < az;
      },
      MLRcH: "bvyhZ",
      XiFSS: function (ay, az) {
        return ay === az;
      },
      Rjzox: function (ay, az, aA, aB) {
        return ay(az, aA, aB);
      },
      AjAws: "_invoke",
      DiLbZ: function (ay, az) {
        return ay(az);
      },
      lcbTy: "ZlRat",
      CXRqJ: "DVCnz",
      WhVZu: "Tkyrw",
      xzYhn: "xlNgf",
      cQJRf: function (ay, az) {
        return ay !== az;
      },
      GYjmF: "HjfAs",
      PXLjV: "throw",
      fubmq: function (ay, az) {
        return ay(az);
      },
      fGoMh: "ZYFXC",
      TZuuj: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      rQeFk: "jOvHB",
      ljEQA: "WgigE",
      OZovd: "Utils_Code",
      AsXLf: "✅ Utils加载成功, 请继续",
      KXIal: function (ay) {
        return ay();
      },
      WPFiN: "qxzIC",
      PCsWm: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      WoUVO: "next",
      LcXBz: function (ay, az) {
        return ay !== az;
      },
      tbOEf: "oAzsb",
      zzSsd: "normal",
      LBVup: "oVKWc",
      eALrE: "TWiNS",
      makft: "object",
      dMNbG: function (ay, az) {
        return ay !== az;
      },
      oLClz: "IoLIn",
      SGKTP: function (ay, az, aA, aB) {
        return ay(az, aA, aB);
      },
      eLaAX: function (ay, az) {
        return ay in az;
      },
      niTpV: "ltOin",
      IbVAf: function (ay, az) {
        return ay === az;
      },
      wTZCK: "Generator is already running",
      knqXm: function (ay, az) {
        return ay === az;
      },
      WnBUz: function (ay, az) {
        return ay === az;
      },
      peyoa: "ZPWoa",
      DomeA: "xWmSf",
      XEWaC: "dhept",
      xBduP: function (ay, az, aA) {
        return ay(az, aA);
      },
      cvPTH: "rmNpE",
      UUAUo: function (ay, az) {
        return ay === az;
      },
      Rbbqo: "WSiRg",
      IhGvA: function (ay, az) {
        return ay === az;
      },
      TTbnn: function (ay, az) {
        return ay === az;
      },
      XPhaj: "return",
      LNYDo: function (ay, az) {
        return ay !== az;
      },
      MPiwA: "XPWsA",
      mLHbQ: "奖品：",
      NWkvn: " API请求失败，请检查网路重试",
      UreyZ: function (ay, az) {
        return ay(az);
      },
      DsOMJ: "ezafm",
      DWmXn: "kezuW",
      UnOxl: "end",
      cHEgz: function (ay) {
        return ay();
      },
      mQfkl: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      oeatq: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      QSMEX: "uZIdi",
      lFHrb: function (ay, az) {
        return ay !== az;
      },
      OCSYT: "wHfQA",
      lVvFU: "WWCky",
      zmwTY: function (ay, az) {
        return ay === az;
      },
      bKLkS: "IQmJm",
      WfeSw: "gkwbw",
      TSVRR: function (ay, az) {
        return ay + az;
      },
      lURhV: " is not iterable",
      RyCLp: function (ay, az) {
        return ay == az;
      },
      WETYd: function (ay, az) {
        return ay > az;
      },
      Cewhg: function (ay, az) {
        return ay(az);
      },
      ItQiO: function (ay, az) {
        return ay < az;
      },
      RvVjL: function (ay, az) {
        return ay === az;
      },
      hDpGS: "Qtybd",
      EslYU: function (ay, az) {
        return ay !== az;
      },
      urFLG: "jkzEh",
      uzRBt: "[object Generator]",
      nUFxj: function (ay, az, aA, aB) {
        return ay(az, aA, aB);
      },
      XLcCH: function (ay, az) {
        return ay === az;
      },
      XFbtL: "jigko",
      MkFjp: function (ay, az) {
        return ay === az;
      },
      JDlJj: "oAdti",
      PwBjw: "QpjXu",
      OECwp: "sHaeF",
      AsLtT: function (ay, az) {
        return ay === az;
      },
      qtqhi: function (ay, az) {
        return ay instanceof az;
      },
      NygvF: function (ay, az, aA, aB) {
        return ay(az, aA, aB);
      },
      kTNOV: function (ay, az, aA, aB) {
        return ay(az, aA, aB);
      },
      AShLG: function (ay, az) {
        return ay === az;
      },
      BzQXL: "ElfWF",
      jInaw: function (ay) {
        return ay();
      },
      awUac: "client_id=",
      IeMWI: "&password=",
      RXUpd: "&phone_number=",
      xRdtR: "post%%/web/oauth/credential_auth?",
      EaUBQ: function (ay, az) {
        return ay(az);
      },
      tSfwV: "&&FR*r!isE5W&&",
      fhWjG: function (ay) {
        return ay();
      },
      KtZgE: "M1903F2A",
      yvMqH: "M2001J2C",
      GQJlx: "M2001J1C",
      yjpna: "2107119DC",
      WbVoU: "2201123C",
      ZopWv: "2112123AC",
      cJGkj: "2201122C",
      FiRcd: "2210132C",
      ZHtMZ: "2304FPN6DC",
      TEmpI: "23127PN0CC",
      ohxzm: "2312CRAD3C",
      dEzqI: "2312DRAABC",
      jYRBw: "22101316UCP",
      NWCEg: "Xiaomi ",
      XUNso: "Android",
      yRVCD: "6.11.0",
      SBNPe: function (ay, az) {
        return ay === az;
      },
      WbdZA: "iterator result is not an object",
      FMAOI: "NmnOG",
      vbCNb: function (ay, az) {
        return ay - az;
      },
      AZzAJ: function (ay, az) {
        return ay >= az;
      },
      jQxfZ: "jdJsc",
      JPZNh: "Yjewq",
      Euclu: function (ay, az) {
        return ay === az;
      },
      KxJRw: "root",
      VdIhN: function (ay, az) {
        return ay <= az;
      },
      Qbhrl: "ouryE",
      IAmYu: "yMdmh",
      sEHKV: "finallyLoc",
      ioCSQ: function (ay, az) {
        return ay === az;
      },
      ZJFRG: "xOPcC",
      uJITY: function (ay, az) {
        return ay < az;
      },
      ZAChg: function (ay, az, aA) {
        return ay(az, aA);
      },
      htTcZ: function (ay, az, aA) {
        return ay(az, aA);
      },
      Yqjhe: "gPBCi",
      INgKP: "lVUEe",
      jLrTn: "try statement without catch or finally",
      NOOAX: function (ay, az) {
        return ay < az;
      },
      NjDXl: function (ay, az) {
        return ay(az);
      },
      cUlEA: function (ay, az) {
        return ay === az;
      },
      uGuXW: function (ay, az) {
        return ay(az);
      },
      gNGsn: function (ay, az) {
        return ay | az;
      },
      kdHqK: function (ay, az) {
        return ay * az;
      },
      LQtNK: function (ay, az) {
        return ay === az;
      },
      UKVTW: function (ay, az) {
        return ay & az;
      }
    };
    g = function () {
      {
        return a3;
      }
    };
    var a2;
    var a3 = {
      wrap: ac
    };
    var a4 = Object.prototype;
    var a5 = a4.hasOwnProperty;
    var a6 = Object.defineProperty || function (ay, az, aA) {
      ay[az] = aA.value;
    };
    var a7 = "function" == typeof Symbol ? Symbol : {};
    var a8 = a7.iterator || "@@iterator";
    var a9 = a7.asyncIterator || "@@asyncIterator";
    var aa = a7.toStringTag || "@@toStringTag";
    function ab(ay, az, aA) {
      {
        var aC = {
          value: aA,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ay, az, aC);
        return ay[az];
      }
    }
    try {
      {
        ab({}, "");
      }
    } catch (az) {
      ab = function (aB, aC, aD) {
        {
          return aB[aC] = aD;
        }
      };
    }
    function ac(aB, aC, aD, aE) {
      {
        var aF = aC && aC.prototype instanceof aj ? aC : aj;
        var aG = Object.create(aF.prototype);
        var aH = new aw(aE || []);
        a6(aG, "_invoke", {
          value: as(aB, aD, aH)
        });
        return aG;
      }
    }
    function ad(aB, aC, aD) {
      {
        try {
          return {
            type: "normal",
            arg: aB.call(aC, aD)
          };
        } catch (aH) {
          {
            var aF = {
              type: "throw",
              arg: aH
            };
            return aF;
          }
        }
      }
    }
    var ae = "suspendedStart";
    var af = "suspendedYield";
    var ag = "executing";
    var ah = "completed";
    var ai = {};
    function aj() {}
    function ak() {}
    function al() {}
    var am = {};
    ab(am, a8, function () {
      {
        return this;
      }
    });
    var an = Object.getPrototypeOf;
    var ao = an && an(an(ax([])));
    ao && ao !== a4 && a5.call(ao, a8) && (am = ao);
    al.prototype = aj.prototype = Object.create(am);
    var ap = al.prototype;
    function aq(aB) {
      {
        ["next", "throw", "return"].forEach(function (aE) {
          {
            ab(aB, aE, function (aF) {
              {
                return this._invoke(aE, aF);
              }
            });
          }
        });
      }
    }
    function ar(aB, aC) {
      {
        function aF(aG, aH, aI, aJ) {
          {
            var aK = ad(aB[aG], aB, aH);
            if ("throw" !== aK.type) {
              {
                var aL = aK.arg;
                var aM = aL.value;
                return aM && "object" == b(aM) && a5.call(aM, "__await") ? aC.resolve(aM.__await).then(function (aN) {
                  {
                    aF("next", aN, aI, aJ);
                  }
                }, function (aN) {
                  {
                    aF("throw", aN, aI, aJ);
                  }
                }) : aC.resolve(aM).then(function (aN) {
                  {
                    aL.value = aN;
                    aI(aL);
                  }
                }, function (aN) {
                  return aF("throw", aN, aI, aJ);
                });
              }
            }
            aJ(aK.arg);
          }
        }
        var aE;
        a6(this, "_invoke", {
          value: function (aG, aH) {
            {
              function aK() {
                {
                  return new aC(function (aM, aN) {
                    {
                      aF(aG, aH, aM, aN);
                    }
                  });
                }
              }
              return aE = aE ? aE.then(aK, aK) : aK();
            }
          }
        });
      }
    }
    function as(aB, aC, aD) {
      {
        var aF = ae;
        return function (aG, aH) {
          {
            if (aF === ag) {
              throw Error("Generator is already running");
            }
            if (aF === ah) {
              {
                if ("throw" === aG) {
                  throw aH;
                }
                var aJ = {
                  value: a2,
                  done: true
                };
                return aJ;
              }
            }
            for (aD.method = aG, aD.arg = aH;;) {
              {
                var aK = aD.delegate;
                if (aK) {
                  {
                    var aL = at(aK, aD);
                    if (aL) {
                      {
                        if (aL === ai) {
                          continue;
                        }
                        return aL;
                      }
                    }
                  }
                }
                if ("next" === aD.method) {
                  aD.sent = aD._sent = aD.arg;
                } else {
                  if ("throw" === aD.method) {
                    {
                      if (aF === ae) {
                        throw aF = ah, aD.arg;
                      }
                      aD.dispatchException(aD.arg);
                    }
                  } else {
                    "return" === aD.method && aD.abrupt("return", aD.arg);
                  }
                }
                aF = ag;
                var aM = ad(aB, aC, aD);
                if ("normal" === aM.type) {
                  {
                    if (aF = aD.done ? ah : af, aM.arg === ai) {
                      continue;
                    }
                    var aN = {
                      value: aM.arg,
                      done: aD.done
                    };
                    return aN;
                  }
                }
                "throw" === aM.type && (aF = ah, aD.method = "throw", aD.arg = aM.arg);
              }
            }
          }
        };
      }
    }
    function at(aB, aC) {
      {
        var aH = aC.method;
        var aI = aB.iterator[aH];
        if (aI === a2) {
          aC.delegate = null;
          "throw" === aH && aB.iterator.return && (aC.method = "return", aC.arg = a2, at(aB, aC), "throw" === aC.method) || "return" !== aH && (aC.method = "throw", aC.arg = new TypeError("The iterator does not provide a '" + aH + "' method"));
          return ai;
        }
        var aF = ad(aI, aB.iterator, aC.arg);
        if ("throw" === aF.type) {
          aC.method = "throw";
          aC.arg = aF.arg;
          aC.delegate = null;
          return ai;
        }
        var aG = aF.arg;
        return aG ? aG.done ? (aC[aB.resultName] = aG.value, aC.next = aB.nextLoc, "return" !== aC.method && (aC.method = "next", aC.arg = a2), aC.delegate = null, ai) : aG : (aC.method = "throw", aC.arg = new TypeError("iterator result is not an object"), aC.delegate = null, ai);
      }
    }
    function au(aB) {
      {
        var aD = {
          tryLoc: aB[0]
        };
        1 in aB && (aD.catchLoc = aB[1]);
        2 in aB && (aD.finallyLoc = aB[2], aD.afterLoc = aB[3]);
        this.tryEntries.push(aD);
      }
    }
    function av(aB) {
      {
        var aC = aB.completion || {};
        aC.type = "normal";
        delete aC.arg;
        aB.completion = aC;
      }
    }
    function aw(aB) {
      {
        var aC = {
          tryLoc: "root"
        };
        this.tryEntries = [aC];
        aB.forEach(au, this);
        this.reset(true);
      }
    }
    function ax(aB) {
      {
        if (aB || "" === aB) {
          {
            var aD = aB[a8];
            if (aD) {
              return aD.call(aB);
            }
            if ("function" == typeof aB.next) {
              return aB;
            }
            if (!isNaN(aB.length)) {
              {
                var aE = -1;
                var aF = function aI() {
                  {
                    for (; ++aE < aB.length;) {
                      if (a5.call(aB, aE)) {
                        aI.value = aB[aE];
                        aI.done = false;
                        return aI;
                      }
                    }
                    aI.value = a2;
                    aI.done = true;
                    return aI;
                  }
                };
                return aF.next = aF;
              }
            }
          }
        }
        throw new TypeError(b(aB) + " is not iterable");
      }
    }
    ak.prototype = al;
    a6(ap, "constructor", {
      value: al,
      configurable: true
    });
    a6(al, "constructor", {
      value: ak,
      configurable: true
    });
    ak.displayName = ab(al, aa, "GeneratorFunction");
    a3.isGeneratorFunction = function (aB) {
      {
        var aC = "function" == typeof aB && aB.constructor;
        return !!aC && (aC === ak || "GeneratorFunction" === (aC.displayName || aC.name));
      }
    };
    a3.mark = function (aB) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aB, al) : (aB.__proto__ = al, ab(aB, aa, "GeneratorFunction"));
        aB.prototype = Object.create(ap);
        return aB;
      }
    };
    a3.awrap = function (aB) {
      {
        var aC = {
          __await: aB
        };
        return aC;
      }
    };
    aq(ar.prototype);
    ab(ar.prototype, a9, function () {
      return this;
    });
    a3.AsyncIterator = ar;
    a3.async = function (aB, aC, aD, aE, aF) {
      {
        undefined === aF && (aF = Promise);
        var aH = new ar(ac(aB, aC, aD, aE), aF);
        return a3.isGeneratorFunction(aC) ? aH : aH.next().then(function (aI) {
          {
            return aI.done ? aI.value : aH.next();
          }
        });
      }
    };
    aq(ap);
    ab(ap, aa, "Generator");
    ab(ap, a8, function () {
      {
        return this;
      }
    });
    ab(ap, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a3.keys = function (aB) {
      {
        var aC = Object(aB);
        var aD = [];
        for (var aE in aC) aD.push(aE);
        aD.reverse();
        return function aG() {
          {
            for (; aD.length;) {
              {
                var aI = aD.pop();
                if (aI in aC) {
                  aG.value = aI;
                  aG.done = false;
                  return aG;
                }
              }
            }
            aG.done = true;
            return aG;
          }
        };
      }
    };
    a3.values = ax;
    aw.prototype = {
      constructor: aw,
      reset: function (aB) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a2, this.done = false, this.delegate = null, this.method = "next", this.arg = a2, this.tryEntries.forEach(av), !aB) {
            for (var aC in this) "t" === aC.charAt(0) && a5.call(this, aC) && !isNaN(+aC.slice(1)) && (this[aC] = a2);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aB = this.tryEntries[0].completion;
          if ("throw" === aB.type) {
            throw aB.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aB) {
        {
          if (this.done) {
            throw aB;
          }
          var aD = this;
          function aJ(aK, aL) {
            aG.type = "throw";
            aG.arg = aB;
            aD.next = aK;
            aL && (aD.method = "next", aD.arg = a2);
            return !!aL;
          }
          for (var aE = this.tryEntries.length - 1; aE >= 0; --aE) {
            {
              var aF = this.tryEntries[aE];
              var aG = aF.completion;
              if ("root" === aF.tryLoc) {
                return aJ("end");
              }
              if (aF.tryLoc <= this.prev) {
                {
                  var aH = a5.call(aF, "catchLoc");
                  var aI = a5.call(aF, "finallyLoc");
                  if (aH && aI) {
                    {
                      if (this.prev < aF.catchLoc) {
                        return aJ(aF.catchLoc, true);
                      }
                      if (this.prev < aF.finallyLoc) {
                        return aJ(aF.finallyLoc);
                      }
                    }
                  } else {
                    if (aH) {
                      {
                        if (this.prev < aF.catchLoc) {
                          return aJ(aF.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aI) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aF.finallyLoc) {
                          return aJ(aF.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aB, aC) {
        {
          for (var aE = this.tryEntries.length - 1; aE >= 0; --aE) {
            {
              var aF = this.tryEntries[aE];
              if (aF.tryLoc <= this.prev && a5.call(aF, "finallyLoc") && this.prev < aF.finallyLoc) {
                {
                  var aG = aF;
                  break;
                }
              }
            }
          }
          aG && ("break" === aB || "continue" === aB) && aG.tryLoc <= aC && aC <= aG.finallyLoc && (aG = null);
          var aH = aG ? aG.completion : {};
          aH.type = aB;
          aH.arg = aC;
          return aG ? (this.method = "next", this.next = aG.finallyLoc, ai) : this.complete(aH);
        }
      },
      complete: function (aB, aC) {
        {
          if ("throw" === aB.type) {
            throw aB.arg;
          }
          "break" === aB.type || "continue" === aB.type ? this.next = aB.arg : "return" === aB.type ? (this.rval = this.arg = aB.arg, this.method = "return", this.next = "end") : "normal" === aB.type && aC && (this.next = aC);
          return ai;
        }
      },
      finish: function (aB) {
        {
          for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
            {
              var aE = this.tryEntries[aD];
              if (aE.finallyLoc === aB) {
                this.complete(aE.completion, aE.afterLoc);
                av(aE);
                return ai;
              }
            }
          }
        }
      },
      catch: function (aB) {
        {
          for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
            {
              var aD = this.tryEntries[aC];
              if (aD.tryLoc === aB) {
                {
                  var aE = aD.completion;
                  if ("throw" === aE.type) {
                    {
                      var aF = aE.arg;
                      av(aD);
                    }
                  }
                  return aF;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aB, aC, aD) {
        {
          this.delegate = {
            iterator: ax(aB),
            resultName: aC,
            nextLoc: aD
          };
          "next" === this.method && (this.arg = a2);
          return ai;
        }
      }
    };
    return a3;
  }
  function h(a1, a2, a3, a4, a5, a6, a7) {
    {
      try {
        {
          var a9 = a1[a6](a7);
          var aa = a9.value;
        }
      } catch (ad) {
        return void a3(ad);
      }
      a9.done ? a2(aa) : Promise.resolve(aa).then(a4, a5);
    }
  }
  function i(a1) {
    return function () {
      var a4 = this;
      var a5 = arguments;
      return new Promise(function (a6, a7) {
        var a9 = a1.apply(a4, a5);
        function aa(ac) {
          h(a9, a6, a7, aa, ab, "next", ac);
        }
        function ab(ac) {
          h(a9, a6, a7, aa, ab, "throw", ac);
        }
        aa(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "";
  var k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var l = undefined;
  window = {};
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "94";
  var r = "";
  var s = "10048";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  function C() {
    return D.apply(this, arguments);
  }
  function D() {
    {
      D = i(g().mark(function a2() {
        {
          var a4;
          var a5;
          var a6;
          var a7;
          var a8;
          var a9;
          var aa;
          var ab;
          var ac;
          var ad;
          var ae;
          var af;
          var ag;
          var ah;
          var ai;
          var aj;
          var ak;
          var al;
          var am;
          var an;
          var ao;
          var ap;
          var aq;
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          var ax;
          var ay;
          var az;
          var aA;
          var aB;
          var aC;
          var aD;
          var aE;
          var aF;
          var aG;
          var aH;
          var aI;
          var aJ;
          var aK;
          var aL;
          var aM;
          var aN;
          var aO;
          var aP;
          var aQ;
          var aR;
          var aS;
          var aT;
          var aU;
          var aV;
          return g().wrap(function (aW) {
            {
              for (;;) {
                switch (aW.prev = aW.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      aW.next = 6;
                      break;
                    }
                    console.log("先去boxjs填写账号密码");
                    aW.next = 5;
                    return Z("先去boxjs填写账号密码");
                  case 5:
                    return aW.abrupt("return");
                  case 6:
                    aW.next = 8;
                    return X();
                  case 8:
                    l = aW.sent;
                    a4 = j.split(" ");
                    a5 = c(a4);
                    aW.prev = 11;
                    a5.s();
                  case 13:
                    if ((a6 = a5.n()).done) {
                      {
                        aW.next = 197;
                        break;
                      }
                    }
                    a7 = a6.value;
                    console.log("随机生成UA");
                    a8 = W();
                    v = a8.ua;
                    w = a8.commonUa;
                    x = a8.uuid;
                    console.log(v);
                    console.log(w);
                    t = a7.split("&")[0];
                    u = a7.split("&")[1];
                    console.log("用户：".concat(t, "开始任务"));
                    console.log("获取sessionId");
                    aW.next = 28;
                    return K("/api/account/init");
                  case 28:
                    a9 = aW.sent;
                    p = a9.data.session.id;
                    console.log(p);
                    console.log("获取signature_key");
                    aW.next = 34;
                    return E("/web/init?client_id=".concat(s));
                  case 34:
                    aa = aW.sent;
                    m = aa.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    aW.next = 40;
                    return G("/web/oauth/credential_auth");
                  case 40:
                    if (ab = aW.sent, ab.data) {
                      {
                        aW.next = 44;
                        break;
                      }
                    }
                    console.log(ab.message);
                    return aW.abrupt("continue", 195);
                  case 44:
                    ac = ab.data.authorization_code.code;
                    console.log(ac);
                    console.log("登录");
                    aW.next = 49;
                    return K("/api/zbtxz/login", "check_token=&code=".concat(ac, "&token=&type=-1&union_id="));
                  case 49:
                    if (ad = aW.sent, console.log("登录成功"), r = ad.data.session.account_id, p = ad.data.session.id, console.log("————————————"), console.log("获取id"), B) {
                      {
                        aW.next = 65;
                        break;
                      }
                    }
                    aW.next = 58;
                    return I("/api/myPage/list");
                  case 58:
                    ae = aW.sent;
                    af = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
                    ag = JSON.stringify(ae).match(af);
                    ag && (B = ag[1]);
                    af = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
                    ag = JSON.stringify(ae).match(af);
                    ag && (A = ag[1]);
                  case 65:
                    if (A && B) {
                      {
                        aW.next = 68;
                        break;
                      }
                    }
                    console.log("获取id失败");
                    return aW.abrupt("continue", 195);
                  case 68:
                    console.log("签到id：".concat(B));
                    console.log("阅读id：".concat(A));
                    aW.next = 72;
                    return I("/api/user_mumber/account_detail");
                  case 72:
                    ah = aW.sent;
                    ai = Math.round(new Date().getTime() / 1000).toString();
                    aW.next = 76;
                    return O("/memberhy/tm/signature", {
                      accountId: r,
                      signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(ai, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                      mobile: "1",
                      sessionId: p,
                      login: "1",
                      user: {
                        realName: "",
                        image_url: ah.data.rst.image_url,
                        nick_name: ah.data.rst.nick_name,
                        is_face_verify: 0,
                        idcard: "",
                        id: r
                      },
                      timestamp: ai,
                      sign: "xsb_hn"
                    });
                  case 76:
                    aj = aW.sent;
                    y = JSON.stringify({
                      id: aj.id,
                      black: 0,
                      btoken: aj.btoken,
                      expire: aj.expire,
                      token: aj.token,
                      source: "xsb_hn",
                      mobile: aj.mobile,
                      mark: aj.mark,
                      mtoken: aj.mtoken,
                      stoken: aj.stoken,
                      nick_name: encodeURI(aj.nick_name),
                      avatar: aj.avatar
                    });
                    console.log("开始签到");
                    ak = new (l.loadJSEncrypt())();
                    ak.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                    al = ak.encrypt(JSON.stringify({
                      activity_id: B,
                      timestamp: Math.round(new Date().getTime() / 1000).toString()
                    }));
                    aW.next = 84;
                    return O("/signhy/client/actSign/actSign", {
                      params: al
                    });
                  case 84:
                    am = aW.sent;
                    0 == am.error_code ? console.log("签到成功") : console.log(am.error_message);
                    aW.next = 88;
                    return M("/signhy/client/actSign/getRelationCjList?activity_id=".concat(B));
                  case 88:
                    an = aW.sent;
                    ao = c(an.response);
                    aW.prev = 90;
                    ao.s();
                  case 92:
                    if ((ap = ao.n()).done) {
                      {
                        aW.next = 112;
                        break;
                      }
                    }
                    aq = ap.value;
                    console.log("活动：".concat(aq.title));
                    console.log("拥有".concat(aq.draw_num, "次抽奖"));
                    ar = 0;
                  case 97:
                    if (!(ar < aq.draw_num)) {
                      {
                        aW.next = 105;
                        break;
                      }
                    }
                    aW.next = 100;
                    return O("/lotteryhy/api/client/cj/awd/drw/".concat(aq.hashid), {});
                  case 100:
                    as = aW.sent;
                    as.award_name ? (console.log("抽奖获得：".concat(as.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(as.award_name, "\n")) : (console.log(JSON.stringify(as)), n += "用户：".concat(t, " 抽奖获得：").concat(as.error_message, "\n"));
                  case 102:
                    ar++;
                    aW.next = 97;
                    break;
                  case 105:
                    aW.next = 107;
                    return M("/lotteryhy/api/client/cj/my/prize/info/".concat(aq.hashid, "?page=1&count=100"));
                  case 107:
                    at = aW.sent;
                    au = c(at.data);
                    try {
                      {
                        for (au.s(); !(av = au.n()).done;) {
                          aw = av.value;
                          3 == aw.prize_type && 2 != aw.status && (console.log("奖品：".concat(aw.prize_content, " code：").concat(aw.prize_info.code)), o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(aw.prize_info.code, "\n"));
                        }
                      }
                    } catch (b7) {
                      {
                        au.e(b7);
                      }
                    } finally {
                      au.f();
                    }
                  case 110:
                    aW.next = 92;
                    break;
                  case 112:
                    aW.next = 117;
                    break;
                  case 114:
                    aW.prev = 114;
                    aW.t0 = aW.catch(90);
                    ao.e(aW.t0);
                  case 117:
                    aW.prev = 117;
                    ao.f();
                    return aW.finish(117);
                  case 120:
                    console.log("————————————");
                    console.log("阅读抽奖");
                    console.log("滑块验证");
                    aW.next = 125;
                    return M("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
                  case 125:
                    ax = aW.sent;
                    aW.next = 128;
                    return Q("".concat(k, "/crop"), {
                      image: ax.img,
                      y_coordinate: 150
                    });
                  case 128:
                    if (ay = aW.sent, ay) {
                      {
                        aW.next = 134;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    aW.next = 133;
                    return Z("ddddocr服务异常");
                  case 133:
                    return aW.abrupt("continue", 195);
                  case 134:
                    var aY = {
                      slidingImage: ay.slidingImage,
                      backImage: ay.backImage
                    };
                    aW.next = 136;
                    return Q("".concat(k, "/slideComparison"), aY);
                  case 136:
                    if (az = aW.sent, az) {
                      {
                        aW.next = 142;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    aW.next = 141;
                    return Z("ddddocr服务异常");
                  case 141:
                    return aW.abrupt("continue", 195);
                  case 142:
                    console.log(az);
                    aA = ax.request_id;
                    aB = az.result;
                    aW.next = 147;
                    return M("/newshy/api/client/news/list/".concat(A));
                  case 147:
                    aC = aW.sent;
                    aD = c(aC.data[0].information_content_data[0].data);
                    aW.prev = 149;
                    aD.s();
                  case 151:
                    if ((aE = aD.n()).done) {
                      {
                        aW.next = 167;
                        break;
                      }
                    }
                    for (aF = aE.value, console.log("文章：".concat(aF.title)), aG = aF.link.split("?")[1], aH = {}, aI = aG.split("&"), aJ = 0, aK = aI.length; aJ < aK; aJ++) {
                      aL = aI[aJ].split("=");
                      aH[aL[0]] = aL[1];
                    }
                    aM = new (l.loadJSEncrypt())();
                    aM.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                    aN = aM.encrypt(JSON.stringify({
                      news_id: A,
                      item_id: aF.item_id,
                      request_id: aA,
                      timestamp: Math.round(new Date().getTime() / 1000).toString(),
                      tn_x: aB
                    }));
                    aW.next = 163;
                    return O("/newshy/api/client/news/readArticle", {
                      params: aN
                    });
                  case 163:
                    aO = aW.sent;
                    console.log("阅读：".concat(null == aO ? undefined : aO.success));
                  case 165:
                    aW.next = 151;
                    break;
                  case 167:
                    aW.next = 172;
                    break;
                  case 169:
                    aW.prev = 169;
                    aW.t1 = aW.catch(149);
                    aD.e(aW.t1);
                  case 172:
                    aW.prev = 172;
                    aD.f();
                    return aW.finish(172);
                  case 175:
                    z = aC.data[0].draw.activity_id;
                    console.log("抽奖id：".concat(z));
                    aW.next = 179;
                    return M("/lotteryhy/designh5/client/activity/".concat(z));
                  case 179:
                    aP = aW.sent;
                    console.log("拥有".concat(aP.response.remain_counts, "次抽奖"));
                    aQ = 0;
                  case 182:
                    if (!(aQ < aP.response.remain_counts)) {
                      {
                        aW.next = 190;
                        break;
                      }
                    }
                    aW.next = 185;
                    return O("/lotteryhy/api/client/cj/awd/drw/".concat(z), {});
                  case 185:
                    aR = aW.sent;
                    aR.award_name ? (console.log("抽奖获得：".concat(aR.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(aR.award_name, "\n")) : (console.log(JSON.stringify(aR)), n += "用户：".concat(t, " 抽奖获得：").concat(aR.error_message, "\n"));
                  case 187:
                    aQ++;
                    aW.next = 182;
                    break;
                  case 190:
                    aW.next = 192;
                    return M("/lotteryhy/api/client/cj/my/prize/info/".concat(z, "?page=1&count=100"));
                  case 192:
                    aS = aW.sent;
                    aT = c(aS.data);
                    try {
                      {
                        for (aT.s(); !(aU = aT.n()).done;) {
                          aV = aU.value;
                          3 == aV.prize_type && 2 != aV.status && (console.log("奖品：".concat(aV.prize_content, " code：").concat(aV.prize_info.code)), o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(aV.prize_info.code, "\n"));
                        }
                      }
                    } catch (bf) {
                      {
                        aT.e(bf);
                      }
                    } finally {
                      {
                        aT.f();
                      }
                    }
                  case 195:
                    aW.next = 13;
                    break;
                  case 197:
                    aW.next = 202;
                    break;
                  case 199:
                    aW.prev = 199;
                    aW.t2 = aW.catch(11);
                    a5.e(aW.t2);
                  case 202:
                    aW.prev = 202;
                    a5.f();
                    return aW.finish(202);
                  case 205:
                    if (!n) {
                      {
                        aW.next = 208;
                        break;
                      }
                    }
                    aW.next = 208;
                    return Z(n);
                  case 208:
                    if (!o) {
                      {
                        aW.next = 211;
                        break;
                      }
                    }
                    aW.next = 211;
                    return Z(o);
                  case 211:
                  case "end":
                    return aW.stop();
                }
              }
            }
          }, a2, null, [[11, 199, 202, 205], [90, 114, 117, 120], [149, 169, 172, 175]]);
        }
      }));
      return D.apply(this, arguments);
    }
  }
  function E(a1) {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function a2(a3) {
      var a4 = {
        qPeAO: function (a5) {
          return a5();
        },
        LLwFp: "eLOKf",
        FNkbh: "PVCJu",
        OWZmh: function (a5, a6) {
          return a5 !== a6;
        },
        XCKXb: function (a5, a6, a7, a8, a9) {
          return a5(a6, a7, a8, a9);
        },
        aLBKC: "throw",
        ueXzl: function (a5, a6) {
          return a5 === a6;
        },
        pXXyx: "sFpzr",
        wxZYp: "Keep-Alive",
        ieYUi: "return",
        CcYAl: "end"
      };
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a7) {
                {
                  var a9 = {
                    url: "https://passport.tmuyun.com".concat(a3),
                    headers: {
                      Connection: "Keep-Alive",
                      "Cache-Control": "no-cache",
                      "X-REQUEST-ID": U(),
                      "Accept-Encoding": "gzip",
                      "user-agent": v
                    }
                  };
                  $.get(a9, function () {
                    var ac = i(g().mark(function ad(ae, af, ag) {
                      {
                        return g().wrap(function (ai) {
                          {
                            for (;;) {
                              switch (ai.prev = ai.next) {
                                case 0:
                                  try {
                                    {
                                      ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a7(JSON.parse(ag));
                                    }
                                  } catch (al) {
                                    {
                                      $.logErr(al, af);
                                    }
                                  } finally {
                                    {
                                      a7();
                                    }
                                  }
                                case 1:
                                case "end":
                                  return ai.stop();
                              }
                            }
                          }
                        }, ad);
                      }
                    }));
                    return function (ae, af, ag) {
                      return ac.apply(this, arguments);
                    };
                  }());
                }
              }));
            case 1:
            case "end":
              return a5.stop();
          }
        }
      }, a2);
    }));
    return F.apply(this, arguments);
  }
  function G(a1) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function a2(a3) {
      var a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a6 = S();
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a3),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a6.uuid,
                    "X-SIGNATURE": a6.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  },
                  body: a6.body
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            try {
                              ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ag));
                            } catch (ai) {
                              $.logErr(ai, af);
                            } finally {
                              a9();
                            }
                          case 1:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a7.stop();
          }
        }
      }, a2);
    }));
    return H.apply(this, arguments);
  }
  function I(a1) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a2(a3) {
      var a4;
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              a4 = T(a3);
              return a5.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  url: "https://vapp.tmuyun.com".concat(a3),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a4.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": a4.uuid,
                    "X-SIGNATURE": a4.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  }
                };
                $.get(a9, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ac) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(ae));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ad);
                          case 14:
                            ag.prev = 14;
                            a7();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ab, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a5.stop();
          }
        }
      }, a2);
    }));
    return J.apply(this, arguments);
  }
  function K(a1, a2) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a2(a3, a4) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = T(a3);
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://vapp.tmuyun.com".concat(a3),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a7.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: a4
                };
                $.post(ab, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ae) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, af);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a2);
    }));
    return L.apply(this, arguments);
  }
  function M(a1) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a2(a3) {
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  url: "https://m.aihoge.com/api".concat(a3),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: y,
                    Limit: A,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(A, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a9, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ac) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(ae));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ad);
                          case 14:
                            ag.prev = 14;
                            a7();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ab, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a5.stop();
          }
        }
      }, a2);
    }));
    return N.apply(this, arguments);
  }
  function O(a1, a2) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a2(a3, a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  url: "https://m.aihoge.com/api".concat(a3),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: y,
                    Limit: A,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(A, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a4)
                };
                $.post(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a7();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a2);
    }));
    return P.apply(this, arguments);
  }
  function Q(a1, a2) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a3(a4, a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a8) {
                var aa = {
                  "Content-Type": "application/json"
                };
                var ab = {
                  url: a4,
                  headers: aa,
                  body: JSON.stringify(a5)
                };
                $.post(ab, function (ac, ad, ae) {
                  try {
                    ac ? (console.log("".concat(JSON.stringify(ac))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a8(JSON.parse(ae));
                  } catch (af) {
                    $.logErr(af, ad);
                  } finally {
                    a8();
                  }
                });
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return R.apply(this, arguments);
  }
  function S() {
    var a6 = new (l.loadJSEncrypt())();
    a6.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = a6.encrypt(u);
    var a3 = U();
    var a4 = "client_id=".concat(s, "&password=").concat(u, "&phone_number=").concat(t);
    var a5 = "post%%/web/oauth/credential_auth?".concat(a4, "%%").concat(a3, "%%");
    a4 = "client_id=".concat(s, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = l.createCryptoJS();
    var a7 = CryptoJS.HmacSHA256(a5, m);
    var a8 = CryptoJS.enc.Hex.stringify(a7);
    var a9 = {
      uuid: a3,
      signature: a8,
      body: a4
    };
    return a9;
  }
  function T(a1) {
    var a2 = U();
    var a3 = Date.now();
    a1.indexOf("?") > 0 && (a1 = a1.substring(0, a1.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a4 = CryptoJS.SHA256("".concat(a1, "&&").concat(p, "&&").concat(a2, "&&").concat(a3, "&&FR*r!isE5W&&").concat(q)).toString();
    var a5 = {
      uuid: a2,
      time: a3,
      signature: a4
    };
    return a5;
  }
  function U() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a2) {
      var a3 = 16 * Math.random() | 0;
      var a4 = "x" === a2 ? a3 : 3 & a3 | 8;
      return a4.toString(16);
    });
  }
  function V(a1) {
    return a1[Math.floor(Math.random() * a1.length)];
  }
  function W() {
    var a1 = "14.1.6";
    var a2 = U();
    var a3 = V(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a4 = "Xiaomi " + a3;
    var a5 = "Android";
    var a6 = "".concat(a5.toUpperCase(), ";").concat("11", ";").concat(s, ";").concat(a1, ";1.0;null;").concat(a3);
    var a7 = "".concat(a1, ";").concat(a2, ";").concat(a4, ";").concat(a5, ";").concat("11", ";").concat("6.11.0");
    var a8 = {
      ua: a6,
      commonUa: a7,
      uuid: a2
    };
    return a8;
  }
  function X() {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function a1() {
      var a3;
      return g().wrap(function a4(a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              if (a3 = $.getdata("Utils_Code") || "", !a3 || !Object.keys(a3).length) {
                a5.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a3);
              return a5.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a5.abrupt("return", new Promise(function () {
                var a8 = i(g().mark(function a9(aa) {
                  return g().wrap(function ac(ad) {
                    for (;;) {
                      switch (ad.prev = ad.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ae) {
                            $.setdata(ae, "Utils_Code");
                            eval(ae);
                            console.log("✅ Utils加载成功, 请继续");
                            aa(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ad.stop();
                      }
                    }
                  }, a9);
                }));
                return function (aa) {
                  return a8.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a5.stop();
          }
        }
      }, a1);
    }));
    return Y.apply(this, arguments);
  }
  function Z(a1) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a1(a2) {
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              if (!$.isNode()) {
                a5.next = 5;
                break;
              }
              a5.next = 3;
              return notify.sendNotify($.name, a2);
            case 3:
              a5.next = 6;
              break;
            case 5:
              $.msg($.name, "", a2);
            case 6:
            case "end":
              return a5.stop();
          }
        }
      }, a1);
    }));
    return a0.apply(this, arguments);
  }
  i(g().mark(function a1() {
    return g().wrap(function (a2) {
      for (;;) {
        switch (a2.prev = a2.next) {
          case 0:
            a2.next = 2;
            return C();
          case 2:
          case "end":
            return a2.stop();
        }
      }
    }, a1);
  }))().catch(function (a2) {
    $.log(a2);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}