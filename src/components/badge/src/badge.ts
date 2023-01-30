import { PropType } from "vue";
import { ComponentSize, ButtonNativeTypes } from "../../../constants/size";
export const preCls = "pk-button";
export type ButtonType = '' | 'link' | 'default' | 'primary' | 'ghost' | 'dashed' | 'text' | 'success' | 'warning' | 'danger' | 'info';



export const buttonProps = {
  /**
   * @description button size
   */
  size: {
    type: String as PropType<ComponentSize>,
    default: "",
  },
  /**
   * @description button type
   */
  type: {
    type: String as PropType<ButtonType>,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: String,

  loading: Boolean,

  nativeType: {
    type: String as PropType<ButtonNativeTypes>,
    default: "button",
  },
};
