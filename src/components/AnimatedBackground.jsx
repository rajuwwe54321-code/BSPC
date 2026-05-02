export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#060606]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_100px)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_88px)]" />

      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(220,38,38,0.28),rgba(220,38,38,0.28)_2px,transparent_2px,transparent_100px)] blur-[1px] opacity-20" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(220,38,38,0.22),rgba(220,38,38,0.22)_2px,transparent_2px,transparent_88px)] blur-[1px] opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(153,27,27,0.2),transparent_30%)]" />

      <div className="absolute -left-24 top-0 h-[32rem] w-[32rem] rounded-full bg-red-600/10 blur-[160px]" />
      <div className="absolute -bottom-24 right-0 h-[30rem] w-[30rem] rounded-full bg-red-900/10 blur-[160px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.45))]" />
    </div>
  );
}
