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
    import('./style.css')
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
        minCropBoxWidth: 128,
        minCropBoxHeight: 128,
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
      const canvas = this.cropper.getCroppedCanvas()
      const ctx = canvas.getContext('2d')

      const { width, height } = canvas
      const imageData = ctx.getImageData(0, 0, width, height)
      ctx.clearRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY)

      const pixels = imageData.data
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
          const pixelIndex = (y * width + x) * 4 // RGBA

          if (distanceToCenter <= radius) {
            continue
          }

          pixels[pixelIndex] = 255
          pixels[pixelIndex + 1] = 255
          pixels[pixelIndex + 2] = 255
          pixels[pixelIndex + 3] = 0 // Alpha0
        }
      }

      ctx.putImageData(imageData, 0, 0)
      this.outputUrl = canvas.toDataURL('image/png')
    }
  }
}
