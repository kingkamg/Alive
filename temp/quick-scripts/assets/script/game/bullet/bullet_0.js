(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bullet_0.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2fd46PBiUdIc6ji0RsIzHl3', 'bullet_0', __filename);
// script/game/bullet/bullet_0.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_0 = /** @class */ (function (_super) {
    __extends(Bullet_0, _super);
    function Bullet_0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet_0 = __decorate([
        ccclass
    ], Bullet_0);
    return Bullet_0;
}(bulletBase_1.BulletBase));
exports.Bullet_0 = Bullet_0;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=bullet_0.js.map
        