<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RuntimeRemark',
    mounted() {
      this.$slots.default
      .forEach(node => {
        if (node.tag == 'p' && node.children.every(element => element.tag)) {
          node
          .children
          .filter(element => element.tag)
          .forEach(element => this.changeParentTo(element, this.$parent));
        } else {
          this.changeParentTo(node, this.$parent);
        }
      });
    },
    methods: {
      changeParentTo(element, parent) {
        if (element.elm.parentElement.parentElement) {
          element.elm.parentElement
          .parentElement.removeChild(element.elm.parentElement);
        }
        parent.$el.appendChild(element.elm);
      }
    },
  };
</script>
