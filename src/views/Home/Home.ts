import {onMounted, ref} from "vue";


export const value = ref('')


export function btn() {
    value.value = "zero"
}
