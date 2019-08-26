// components/picker/picker.js
Component({
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    validate: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请选择'
    },
    multiSelect: {
      type: Boolean,
      value: false
    },
    label: String,
    options: Array,
    value: String,
    validatePass: {
      type: Boolean,
      value: false
    },
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    // value: '',
    showPicker: false,
    selectValue: 0,
    selectValues: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPicker() {
      // 用that取代this，防止不必要的情况发生
      var that = this;
      // 创建一个动画实例
      var animation = wx.createAnimation({
        // 动画持续时间
        duration: 500,
        // 定义动画效果，当前是匀速
        timingFunction: 'ease'
      })
      // 将该变量赋值给当前动画
      that.animation = animation
      // 先在y轴偏移，然后用step()完成一个动画
      animation.translateY(200).step()
      // 用setData改变当前动画
      that.setData({
        // 通过export()方法导出数据
        animationData: animation.export(),

      })
      // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
      setTimeout(function () {
        animation.translateY(0).step()
        that.setData({
          animationData: animation.export()
        })
      }, 50)
      if (this.data.validate) {
        if (this.data.validatePass) {
          this.setData({
            showPicker: !this.data.showPicker
          })
        } else {
          wx.showToast({
            title: this.data.title,
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,

          })
        }
      } else {
        this.setData({
          showPicker: !this.data.showPicker
        })
      }

      this.triggerEvent("show");
    },

    preventTouchMove: function () { },


    cancel() {
      this.setData({
        // value: this.data.value,
        showPicker: false
      })
      let detail = {
        value: this.data.selectValue
      }
      this.triggerEvent("cancel", detail);
    },
    confirm() {
      let arr = []
      if(!this.data.selectValues) {   
        if (this.data.multiSelect) {
          let opt = this.data.options
          for (let i = 0; i < opt.length; i++) {
            arr.push(0)
          }
          this.data.selectValue = arr
        } else {
          arr.push(0)
        }
        console.log(arr)
      } else {
        arr = this.data.selectValues
      }
      
      let selectValue = this.data.selectValue
      this.setData({
        value: selectValue,
        selectValue: selectValue,
        selectValues: arr,
        showPicker: false
      })
      let detail = {
        value: selectValue
      }
      this.triggerEvent("confirm", detail);
    },
    change(e) {
      console.log(e)
      let values = e.detail.value
      this.data.selectValue = this.data.multiSelect? values: values[0]
      this.data.selectValues = values
    },



  }
})