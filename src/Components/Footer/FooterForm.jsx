import React from "react";
export default function FooterForm() {
  return (
    <>
      <div>
        <h4 className="footer-headers">تواصل معنا</h4>
        <form>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1 md:gap-y-3">
            <div className="form-group">
              <input type="text" placeholder="الاسم" name="name" id="name" />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                name="email"
                id="email"
              />
            </div>
            <div className="col-span-2 form-group md:col-span-1">
              <textarea
                name="message"
                rows={5}
                id="message"
                placeholder="الرسالة"
              ></textarea>
            </div>
          </div>
          <button className="btn-secondary">ارسال</button>
        </form>
      </div>
    </>
  );
}
