interface ToolbarTitleProps {
    title: string
}
export const ToolbarTitle = ({ title }: ToolbarTitleProps) => {
    return (
        <p className="text-sm font-light mb-4">{title}</p>
    )
}