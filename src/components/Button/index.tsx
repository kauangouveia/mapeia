interface ButtonProps {
    text: string
    type: "button" | "submit" | "reset"

}

export const Button = ({ text, type }: ButtonProps) => {
    return (
        <button className="px-44 py-2 rounded bg-violet-700 text-cyan-50 font-bold" type={type}>{text}</button>
    )
}