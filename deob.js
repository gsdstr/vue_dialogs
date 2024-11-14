const dl = {
    key: 0,
    class: 'dialog-root',
  },
  hl = { class: 'wrapper' },
  pl = Kn({
    name: 'DialogContextRoot',
    setup(_0x4dcc99) {
      const _0x1b117a = Pr(() =>
        Jn.stack.value.map((_0x531562) => ({
          component: _0x531562.render(),
          instance: _0x531562,
        }))
      )
      return (_0x523ed2, _0x2bbc22) =>
        Rt(_0x1b117a).length
          ? (Ie(),
            mt('div', dl, [
              (Ie(true),
                mt(
                  ie,
                  null,
                  oo(
                    Rt(_0x1b117a),
                    (_0xf26039) => (
                      Ie(),
                        mt('div', hl, [
                          (Ie(),
                            Vt(
                              ro(_0xf26039.component),
                              { dialog: _0xf26039.instance },
                              null,
                              8,
                              ['dialog']
                            )),
                        ])
                    )
                  ),
                  256
                )),
            ]))
          : Io('', true)
    },
  })
class gl {
  constructor() {
    this.stack = Vs([])
  }
  ['push'](_0x787f08) {
    _0x787f08 = Hn(_0x787f08)
    !this.stack.value.find((_0x3de8e7) => _0x3de8e7 === _0x787f08) &&
    (this.stack.value = [...this.stack.value, _0x787f08])
  }
  ['close'](_0xa855fb) {
    this.stack.value = this.stack.value.filter(
      (_0x381709) => _0x381709 !== _0xa855fb
    )
  }
  ['getComponent']() {
    return pl
  }
}
const Jn = new gl(),
  ml = { class: 'dialog' },
  Nr = Kn({
    name: 'DialogComponent',
    setup(_0x3dd5a1) {
      const _0x2fde1c = Vs('Dialog')
      return (_0x18c766, _0x1e8f9f) => (
        Ie(),
          mt('div', ml, [
            as(_0x18c766['$slots'], 'header', {}, () => [
              be('header', null, [be('span', null, Kr(_0x2fde1c.value), 1)]),
            ]),
            as(_0x18c766['$slots'], 'body'),
          ])
      )
    },
  })
class Rr {
  constructor() {
    this.component = Nr
    this.state = null
    this.context = Jn
  }
  get ['promise']() {
    var _0x1583c1
    return (_0x1583c1 = this.state) == null ? void 0 : _0x1583c1.promise
  }
  get ['resolve']() {
    var _0x4d2eca
    return (_0x4d2eca = this.state) == null ? void 0 : _0x4d2eca.resolve
  }
  get ['reject']() {
    var _0x4f9c20
    return (_0x4f9c20 = this.state) == null ? void 0 : _0x4f9c20.reject
  }
  ['render']() {
    return this.component
  }
  ['open']() {
    if (!this.context) {
      throw new Error()
    }
    let _0x50193d, _0x377b05, _0x5bfedc
    return (
      (_0x50193d = new Promise(
        (_0x3bc01f, _0x307ba4) => (
          (_0x377b05 = _0x3bc01f), (_0x5bfedc = _0x307ba4)
        )
      )),
        (this.state = {
          promise: _0x50193d,
          resolve: _0x377b05,
          reject: _0x5bfedc,
        }),
        this.context.push(this),
        _0x50193d.finally(() => this.context.close(this)),
        this.state.promise
    )
  }
}
const _l = be('main', null, [be('span', null, 'Удалить пользователя?')], -1),
  bl = {
    name: 'ConfirmDialog',
    props: { dialog: Rr },
    setup(_0xe81701) {
      return (_0x949ebb, _0x18d40c) => (
        Ie(),
          Vt(Nr, null, {
            body: rr(() => [
              _l,
              be('footer', null, [
                be(
                  'button',
                  {
                    onClick:
                      _0x18d40c[0] ||
                      (_0x18d40c[0] = (_0x5af281) =>
                        _0xe81701.dialog.resolve(false)),
                  },
                  'Отмена'
                ),
                be(
                  'button',
                  {
                    onClick:
                      _0x18d40c[1] ||
                      (_0x18d40c[1] = (_0x1d2673) =>
                        _0xe81701.dialog.resolve(true)),
                  },
                  'Подтвердить'
                ),
              ]),
            ]),
            _: 1,
          })
      )
    },
  }
class xl extends Rr {
  constructor() {
    super(...arguments)
    this.component = bl
    this.title = 'Подтвердите'
  }
  ['open']() {
    return super.open()
  }
}
const yl = Kn({
    name: 'App',
    setup(_0x144383) {
      const _0x3a65e5 = Jn.getComponent()
      class _0x451705 extends xl {
        constructor() {
          super(...arguments)
          this.title = 'Подтвердите удаление пользователя'
        }
      }
      const _0x661447 = async () => {
        const _0x511003 = await new _0x451705().open()
        console.log(_0x511003)
      }
      return (_0x462c5d, _0x3b9559) => (
        Ie(),
          mt(
            ie,
            null,
            [
              be('div', null, [
                be('button', { onClick: _0x661447 }, 'Open Dialog'),
              ]),
              xe(Rt(_0x3a65e5)),
            ],
            64
          )
      )
    },
  }),
  Cl = ul(yl)
Cl.mount('#app')
function _0x23d16c(_0x40ff0d) {
  function _0x5f7751(_0x477b3d) {
    if (typeof _0x477b3d === 'string') {
      const _0x1f0873 = function () {
        while (true) {}
      }
      return _0x1f0873()
    } else {
      if (('' + _0x477b3d / _0x477b3d).length !== 1 || _0x477b3d % 20 === 0) {
        debugger
      } else {
        debugger
      }
    }
    _0x5f7751(++_0x477b3d)
  }
  try {
    if (_0x40ff0d) {
      return _0x5f7751
    } else {
      _0x5f7751(0)
    }
  } catch (_0xd58332) {}
}
