type Props = {
  addClass: string,
  children: React.ReactNode
}

export const ButtonPrimary: React.FC<Props> = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition ease-in-out duration-300 outline-none " +
        addClass
      }
    >
      {children}
    </button>
  )
}
