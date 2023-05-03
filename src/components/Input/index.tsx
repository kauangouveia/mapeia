import { forwardRef } from "react"
import { useFormContext } from "react-hook-form";
type InputProps = {
    textLabel?: string
    textPlaceholder: string
    type: React.HTMLInputTypeAttribute
    registerText: string
    size: string
}

const Input = ({ textLabel, textPlaceholder, type, registerText, size }: InputProps) => {
    const { register } = useFormContext();
    return (
        <label>
            <p className="p-2 font-medium">{textLabel}</p>
            <input placeholder={textPlaceholder} type={type} className={`w-[${size}px] input-primary`} {...register(registerText)} />
        </label>
    )
}

export const MyInput = forwardRef(Input);

