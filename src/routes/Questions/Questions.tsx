import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useSWR from 'swr';
import { Layout } from '@/layouts';
import { fetcher } from '@/api/fetcher';

export function QuestionsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const { data, error } = useSWR('/questions', fetcher);

  if (error) return <div>Failed to load questions</div>;
  if (!data) return <div>Loading...</div>;

  const handleChoiceClick = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push('/matching');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = data[currentQuestionIndex];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">
            {currentQuestion.question_text}
          </h1>
          <p className="text-sm">
            {currentQuestionIndex + 1}/{data.length}
          </p>
        </div>
        <div className="flex space-x-4">
          <div
            className="border p-4 rounded-lg cursor-pointer"
            onClick={handleChoiceClick}
          >
            <Image
              src={currentQuestion.choice1.choice_image_url}
              alt={currentQuestion.choice1.choice_text}
              width={50}
              height={50}
            />
            <p>{currentQuestion.choice1.choice_text}</p>
          </div>
          <div
            className="border p-4 rounded-lg cursor-pointer"
            onClick={handleChoiceClick}
          >
            <Image
              src={currentQuestion.choice2.choice_image_url}
              alt={currentQuestion.choice2.choice_text}
              width={50}
              height={50}
            />
            <p>{currentQuestion.choice2.choice_text}</p>
          </div>
        </div>
        <div className="mt-6">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handlePreviousQuestion}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              前の質問に戻る
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
