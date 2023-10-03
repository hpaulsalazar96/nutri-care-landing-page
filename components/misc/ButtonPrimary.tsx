type Props = {
  addClass?: string,
  children?: React.ReactNode
}

export const ButtonPrimary: React.FC<Props> = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-nutricare-100 hover:shadow-nutricare-md hover:bg-nutricare-200 hover:text-white-500 transition ease-in-out duration-300 outline-none " +
        addClass
      }
    >
      {children}
    </button>
  )
}
