type Props = {
  addClass?: string,
  children?: React.ReactNode
}

export const ButtonOutline: React.FC<Props> = ({ children, addClass }) => {
  return (
    <button
      className={"font-medium tracking-wide py-2 px-5 sm:px-8 hover:border-nutricare-100 text-nutricare-100 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-nutricare-100 hover:text-white-500 transition-all hover:shadow-nutricare-md "
        +
        addClass
      }>
      {" "}
      {children}
    </button>
  )
}