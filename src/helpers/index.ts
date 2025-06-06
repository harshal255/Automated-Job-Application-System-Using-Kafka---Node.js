import fs from 'fs';
import csvParser from 'csv-parser';

export async function parseCSV<T>(filePath: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(new Error(`CSV Parsing Error: ${error.message}`)));
  });
}

export async function extractEmails(url: string): Promise<string[]> {
  try {
    // Fetch the HTML content
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch the website: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()

    // Extract emails using regex
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    const matches = html.match(emailRegex)

    // Remove duplicates and return
    if (matches) {
      return [...new Set(matches)]
    }

    return []
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error("An error occurred while extracting emails")
  }
}