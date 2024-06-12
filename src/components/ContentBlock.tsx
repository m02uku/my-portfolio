import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const ContentBlock: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="p-6 mt-2 mb-2 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        {title && <div className="text-xl font-medium text-black mb-4 border-b pb-4">{title}</div>}
        <div className="text-gray-500">
          <div className="border-gray-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
