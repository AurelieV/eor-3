<template>
  <div class="eor-loader">
    <svg viewBox="0 0 40 40" focusable="false" aria-hidden="true">
      <circle stroke-width="3" stroke-linejoin="round" fill="none" cx="20" cy="20" r="18" />
    </svg>
  </div>
</template>

<style lang="scss">
$size: rem(32px);

.eor-loader {
  width: $size;
  height: $size;

  circle {
    transform-origin: 1.25em 1.25em 0;
    stroke: $primary;
    stroke-dasharray: 132;
    transform: rotate(-90deg);
    animation: spinner 2s linear infinite;
    fill: transparent;
  }
  &.inverted {
    circle {
      stroke: white;
    }
  }
}
@keyframes spinner {
  0% {
    transform: rotate(-90deg);
    stroke-dashoffset: 132;
  }
  50% {
    transform: rotate(270deg);
    stroke-dashoffset: 28;
  }
  100% {
    transform: rotate(630deg);
    stroke-dashoffset: 132;
  }
}
</style>
