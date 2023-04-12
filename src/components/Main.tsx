import React from 'react';

export default function Main() {
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold leading-10 text-left pl-3 text-slate-200 sm:text-3xl md:pl-5 md:text-5xl">
        Fun Facts about React
      </h1>
      <ul className="pl-10 py-2 list-disc list-outside text-left text-slate-200 sm:text-xl md:pl-16 md:text-2xl">
        <li>First released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Maintained by Facebook (now meta)</li>
        <li>Powers thousands of enterprise apps, including mobile</li>
      </ul>
    </div>
  );
}
