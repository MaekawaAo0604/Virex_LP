export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Virex</p>
          <p className="text-gray-400 mb-8">
            試すスピードで、AIプロダクトを量産するスタジオ。
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Virex. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
