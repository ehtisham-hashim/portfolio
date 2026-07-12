'use client';

export default function TempSection() {
  return (
    <section className="main-section w-full min-h-screen bg-slate-100 flex items-center justify-center p-8 border-t border-slate-200">
      <div className="text-center max-w-xl">
        <h2 className="text-3xl font-bold text-slate-800 mb-4 font-sans">Temporary Section</h2>
        <p className="text-slate-600 font-sans">
          This is a placeholder component added below the hero section to test scroll behavior and page layout.
        </p>
      </div>
    </section>
  );
}
