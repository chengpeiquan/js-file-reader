/** 
 * name: js-file-reader
 * version: v1.1.0
 * author: chengpeiquan
 */
 (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.readFile = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __spreadArray(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

      return to;
    }

    var readFile = function (file, readType) {
        return new Promise(function (resolve) {
            var READER = new FileReader();
            switch (readType) {
                case 'base64':
                    READER.readAsDataURL(file);
                    break;
                case 'blob':
                    READER.readAsArrayBuffer(file);
                    break;
            }
            READER.onload = function (e) {
                resolve(e.target.result);
            };
            READER.onabort = function () {
                resolve(null);
            };
            READER.onerror = function () {
                resolve(null);
            };
        });
    };

    var generateFiles = function (fileData) {
        return new Promise(function (resolve) {
            if (!fileData) {
                resolve([]);
                return false;
            }
            var FILE_LIST = Array.isArray(fileData) ? __spreadArray([], fileData) : [fileData];
            var startReadFile = function () { return __awaiter(void 0, void 0, void 0, function () {
                var RESULT, i, RESULT_ITEM, FILE_TYPE, BASE_64, BUFFER, BLOB;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            RESULT = [];
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < FILE_LIST.length)) return [3, 5];
                            RESULT_ITEM = {
                                base64: null,
                                blob: null
                            };
                            FILE_TYPE = FILE_LIST[i].type || '';
                            return [4, readFile(FILE_LIST[i], 'base64')];
                        case 2:
                            BASE_64 = _a.sent();
                            RESULT_ITEM['base64'] = BASE_64;
                            return [4, readFile(FILE_LIST[i], 'blob')];
                        case 3:
                            BUFFER = _a.sent();
                            BLOB = new Blob([BUFFER], {
                                type: FILE_TYPE
                            });
                            RESULT_ITEM['blob'] = BLOB;
                            RESULT.push(RESULT_ITEM);
                            _a.label = 4;
                        case 4:
                            i++;
                            return [3, 1];
                        case 5: return [2, RESULT];
                    }
                });
            }); };
            var NEW_FILE_LIST = startReadFile();
            resolve(NEW_FILE_LIST);
        });
    };

    return generateFiles;

})));
//# sourceMappingURL=js-file-reader.js.map
