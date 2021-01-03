import { DirectiveOptions, DirectiveFunction } from 'vue';
import { DirectiveBinding } from 'vue/types/options';

const inserted: DirectiveFunction = (
  el: HTMLElement,
  binding: DirectiveBinding,
) => {
  el.addEventListener('input', binding.value);
};

const unbind: DirectiveFunction = (
  el: HTMLElement,
  binding: DirectiveBinding,
) => {
  el.removeEventListener('input', binding.value);
};

export const myExample = {
  inserted,
  unbind,
} as DirectiveOptions;
