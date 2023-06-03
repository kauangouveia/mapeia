import { useFormContext } from "react-hook-form";

type checkBoxProps = {
    id: string;
    registerText: string;
    value: string;
    labelText: string;
}

export const Checkbox = ({ id, value, labelText, registerText }: checkBoxProps) => {
    const data = useFormContext();

    return (
        <div className="w-52 h-10 pl-5 rounded flex justify-start items-center gap-3 font-semibold border-2 border-violet-700 mt-5">
            <input type='checkbox' id={id} value={value}  {...data?.register(registerText)} />
            <label> {labelText} </ label>
        </ div>
    )
}