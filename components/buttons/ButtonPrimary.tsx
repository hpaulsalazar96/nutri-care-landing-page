type Props = {
  addClass?: string,
  children?: React.ReactNode,
  onClick?:any
}

export const ButtonPrimary: React.FC<Props> = ({ children, addClass, onClick }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 font-semibold rounded-lg text-white-500 bg-nutricare-100 hover:shadow-nutricare-md hover:bg-nutricare-200 hover:text-white-500 transition ease-in-out duration-300 outline-none " +
        addClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}
