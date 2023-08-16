import { useEffect, useState } from "react";

const Onam2 = () => {
  const targetDate = new Date("2023-08-30T00:00:00");
  const [remainingTime, setRemainingTime] = useState<number>(
    targetDate.getTime() - new Date().getTime()
  );
  const dateStyle = "px-[20px] py-[40px] bg-[#00ffff57] text-[65px]";

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = targetDate.getTime() - currentTime;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setRemainingTime(0);
      } else {
        setRemainingTime(timeLeft);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  return (
    <div className="h-[80vh] ">
      {/* COUNT DOWN TO ONAM */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-semibold mb-4 onam_font">ഓണം എത്തുന്നു ..</h1>
        <div className="text-2xl">
          <p className="flex flex-wrap gap-4">
            Days: <span className={dateStyle}>{days}</span>
            Hours: <span className={dateStyle}>{hours}</span>
            Minutes: <span className={dateStyle}> {minutes}</span>
            Seconds:<span className={dateStyle}> {seconds}</span>
          </p>
        </div>
      </div>
      {/* COUNT DOWN TO ONAM --- end---- */}
      <img
        // srcSet="https://cdn.dribbble.com/users/364321/screenshots/3722087/media/9a93d2f23597a0181e7c4e97ce76c367.png?resize=300x300&vertical=center 300w,
        //   image-medium.jpg 600w,
        //   image-large.jpg 1000w"
        // sizes="(max-width: 320px) 300px,
        //  (max-width: 640px) 600px,
        //  1000px"
        src="https://cdn.dribbble.com/users/364321/screenshots/3722087/media/9a93d2f23597a0181e7c4e97ce76c367.png?resize=800x600&vertical=center"
        loading="lazy"
        className="mt-10"
      />
    </div>
  );
};

export default Onam2;
