<template>
  <div class="video-wrapper">
    <iframe width="560px" height="349px" :src="`https://www.youtube.com/embed/${id}`" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Youtube',
    data() {
      return {
        id: 'dQw4w9WgXcQ',
      };
    },
    mounted() {
      function youtubeParser(url) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
      }

      this.id = youtubeParser(this.$slots.default[0].text);
    },
  };
</script>

<style lang="scss" scoped>

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: rem($gutter-xlarge) auto;
    }
  }
</style>
