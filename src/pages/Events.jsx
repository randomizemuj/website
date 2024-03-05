import eventData from '../Data/Events.json';

export default function Events() {
  return (
    <div className="bg-black text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Our Events
          </h2>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {eventData.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-center justify-between bg-gray-800 rounded-lg overflow-hidden w-full max-w-md mx-auto"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full h-48 rounded-t-lg object-cover"
                />
                <div className="absolute inset-0 rounded-t-lg bg-gray-900/40" />
              </div>
              <div className="w-full p-4">
                <div className="mt-2 flex items-center gap-x-2 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-2 text-lg font-semibold leading-6">
                    <a href={post.href} className="text-white">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}