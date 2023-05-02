type ContainerProps = {
    children: JSX.Element
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="w-screen h-screen bg-zinc-100 flex justify-center items-center">
            {children}
        </div>
    )
}