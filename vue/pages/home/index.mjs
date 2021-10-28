import { render, staticRenderFns } from './render.pug'
import OpenImage from './open-image/index.mjs'
export default {
  render,
  staticRenderFns,
  components: {
    OpenImage
  },
  data: () => {
    return {
      outputUrl: '',
      cropper: null
    }
  },
  async mounted () {
    import('cropperjs/dist/cropper.min.css')
    this.initCropper()
  },
  updated () {

  },
  methods: {
    loadImg (img) {
      this.cropper.destroy()
      this.$refs.image.src = img.src
      this.initCropper()
    },
    async initCropper () {
      const CropperModule = await import('cropperjs')
      const Cropper = CropperModule.default
      this.cropper = new Cropper(this.$refs.image, {
        viewMode: 1,
        dragMode: 'move',
        minCropBoxWidth: 256,
        minCropBoxHeight: 256,
        aspectRatio: 1,
        crop (event) {
          console.log(event.detail.x)
          console.log(event.detail.y)
          console.log(event.detail.width)
          console.log(event.detail.height)
          console.log(event.detail.rotate)
          console.log(event.detail.scaleX)
          console.log(event.detail.scaleY)
        }
      })
    },
    crop () {
      this.outputUrl = this.cropper.getCroppedCanvas().toDataURL('image/png')
    }
  }
}
