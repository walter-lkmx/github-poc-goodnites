<template>
  <div class="markdown-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .markdown-content {

    $list-margin: $gutter-xxlarge;
    $block-margin: rem($gutter-large) 0 rem($gutter-xlarge);

    ul, ol {
      margin: $block-margin;

      ul, ol {
        margin: $block-margin;
      }
    }

    ul {
      &>li {
        // background: url(../../assets/images/black-bullet.svg) no-repeat rem(30px) rem(8px);
        padding-left: rem($list-margin);
      }
    }

    ol {
      &>li {
        counter-increment: list;
        p {
          display: inline-block;
          vertical-align: top;
          width: calc(100% - #{$list-margin});
          margin-bottom: 0;
        }
        &:before {
          color: white;
          content: counter(list);
          display: inline-block;
          vertical-align: middle;
          width: rem($list-margin);
          height: 100%;
          text-align: center;
          line-height: rem(32px);
          // background: url(../../assets/images/green-bullet.svg) no-repeat center;
        }
      }
    }

    blockquote {
      // background-color: $covidsos-green-color;
      color: white;
      padding: rem($gutter);
      font-size: 1.1em;
      line-height: 1.25em;
      margin: $block-margin;

      p:last-child {
        margin-bottom: 0;
      }
    }

    hr {
      border-style: solid;
      margin: rem($gutter-xlarge) 0 rem($gutter-xlarge);
    }

    pre {
      padding: rem($gutter) 0 rem($gutter) rem($gutter);
      border-left: 3px solid black;
      white-space: normal;
      display: block;
      margin: $block-margin;
    }

  }
</style>
