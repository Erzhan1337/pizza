function Form() {
  return (
    <div className="w-full h-[280px] bg-white rounded-xl p-5 mb-10">
      <p className="font-bold text-xl border-b border-gray-200 pb-5">
        2. Персональная информация
      </p>
      <form className="grid grid-cols-2 gap-x-5 gap-y-3 mt-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="ml-3 mb-1">
            Имя
          </label>
          <input
            className="pl-3 outline-0 border border-gray-300 py-3 px-2 rounded-xl"
            type="text"
            id="name"
            name="name"
            placeholder="Иван"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="surname" className="ml-3 mb-1">
            Фамилия
          </label>
          <input
            className="pl-3 outline-0 border border-gray-300 py-3 px-2 rounded-xl"
            type="text"
            id="surname"
            name="surname"
            placeholder="Иванов"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="ml-3 mb-1">
            Email
          </label>
          <input
            className="pl-3 outline-0 border border-gray-300 py-3 px-2 rounded-xl"
            type="text"
            id="email"
            name="email"
            placeholder="ivan@gmail.ru"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="ml-3 mb-1">
            Телефон
          </label>
          <input
            className="pl-3 outline-0 border border-gray-300 py-3 px-2 rounded-xl"
            type="text"
            id="phone"
            name="phone"
            placeholder="+7 777 777 77 77"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
