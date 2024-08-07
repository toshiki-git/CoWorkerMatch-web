import Image from 'next/image';
import Link from 'next/link';

interface UserProps {
  matchingId: string;
  imageUrl: string;
  userName: string;
  message: string;
  unreadCount: number;
}

export function User({
  matchingId,
  imageUrl,
  userName,
  message,
  unreadCount,
}: UserProps) {
  return (
    <Link
      href={`/matchings/${matchingId}`}
      className="cursor-pointer max-w-md mx-auto flex items-center p-4 border-b bg-white hover:bg-green-50 transition duration-200 ease-in-out shadow-lg rounded-md"
    >
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${userName} avatar`}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="ml-4 flex-1 overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {userName}
          </h3>
        </div>
        <p className="text-sm text-gray-600 mt-1 truncate">
          {message || 'まだ質問をしていません'}
        </p>
      </div>
      {unreadCount > 0 && (
        <div
          className={`ml-2 text-sm text-white bg-orange-500 ${unreadCount < 10 ? 'w-6 h-6' : 'px-3 py-1'} rounded-full shadow-md flex items-center justify-center`}
        >
          {unreadCount}
        </div>
      )}
    </Link>
  );
}
