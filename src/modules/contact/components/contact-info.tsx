import { contactInfo } from "../data";

export default function ContactInfo() {
  return (
    <div className="relative">

      {/* 🔥 GLOW */}
      <div className="
        absolute -top-10 -left-10 w-40 h-40
        bg-green-200/40 blur-3xl rounded-full
      " />

      <div className="relative z-10">

        {/* TITLE */}
        <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
          Butuh Website Profesional?
        </h3>

        {/* SUBTITLE */}
        <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
          Konsultasikan kebutuhan digital Anda sekarang.
          Tim kami siap membantu bisnis Anda berkembang lebih cepat 🚀
        </p>

        {/* 🔥 BENEFIT */}
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p>✔ Respon cepat & ramah</p>
          <p>✔ Gratis konsultasi awal</p>
          <p>✔ Sudah dipercaya 50+ client</p>
        </div>

        {/* 🔥 INFO */}
        <div className="mt-10 space-y-6 text-sm">

          <div className="flex items-start gap-3">
            <span className="text-lg">📍</span>
            <p className="text-gray-700">{contactInfo.location}</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-lg">📧</span>
            <p className="text-gray-700">{contactInfo.email}</p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-lg">💬</span>

            <a
              href={`https://wa.me/${contactInfo.phone.replace(/^0/, "62")}`}
              target="_blank"
              className="
                text-green-600 font-semibold
                hover:underline
              "
            >
              Chat WhatsApp: {contactInfo.phone}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}