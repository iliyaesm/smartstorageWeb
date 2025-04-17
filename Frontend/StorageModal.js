import React from 'react';
import { Document, Page } from 'react-pdf';

export default function StorageModal({ unit, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-3/4 max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-2">
          Unit {unit.id} Details
        </h2>
        <p><strong>Renter:</strong> {unit.Contract?.Renter?.name}</p>
        <p><strong>Company:</strong> {unit.Contract?.Renter?.company}</p>
        <p>
          <strong>Contract:</strong>{' '}
          {unit.Contract?.startDate} to {unit.Contract?.endDate}
        </p>
        <p>
          <strong>Payments:</strong>{' '}
          {unit.Contract?.Payments?.map(p => `$${p.amount}`).join(', ')}
        </p>
        {unit.Contract?.filePath && (
          <div className="mt-4">
            <Document file={`http://localhost:4000/${unit.Contract.filePath}`}>
              <Page pageNumber={1} />
            </Document>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
