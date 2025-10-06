function Address() {
  return (
    <div className="w-full bg-white rounded-xl p-5">
      <p className="font-bold text-xl border-b border-gray-200 pb-5">
        3. Адресс доставки
      </p>
      <div>
        <div className="w-[80%]">
          <label htmlFor="address">
            <input
              type="text"
              id="address"
              placeholder="Введите адрес доставки"
              className="w-full mt-5 p-3 border border-gray-200 rounded-xl outline-0 "
            />
          </label>
        </div>
        <div className="w-[80%]">
          <label htmlFor="comment">
            <textarea
              id="comment"
              placeholder="Комментарий к заказу"
              className="w-full mt-5 p-3 border border-gray-200 rounded-xl outline-0 h-[100px] resize-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Address;
