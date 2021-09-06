interface ToolbarTitleProps {
    children?: React.ReactNode
}
export const ToolbarSection = ({ children }: ToolbarTitleProps) => {
    return (
        <div className="mb-7 max-w-max">
            {children}
        </div>
    )
}