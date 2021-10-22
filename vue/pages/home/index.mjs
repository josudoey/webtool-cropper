import { render, staticRenderFns } from './render.pug'
export default {
  render,
  staticRenderFns,
  data: () => {
    return {
      outputUrl: ''

    }
  },
  async mounted() {
    import('cropperjs/dist/cropper.min.css')
    const CropperModule = await import('cropperjs')
    const Cropper = CropperModule.default
    this.cropper = new Cropper(this.$refs.image, {
      viewMode: 2,
      dragMode: 'none',
      minCropBoxWidth: 256,
      minCropBoxHeight: 256,
      aspectRatio: 1,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    })
  },
  updated() {

  },
  methods: {
    crop() {
      this.outputUrl = this.cropper.getCroppedCanvas().toDataURL('image/png')
    }
  }
}
