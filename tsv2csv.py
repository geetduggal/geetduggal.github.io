import csv

def tsv_to_csv(tsv_file, csv_file):
    # Open the TSV file for reading
    with open(tsv_file, 'r', newline='') as tsv_file:
        tsv_reader = csv.reader(tsv_file, delimiter='\t')

        # Open the CSV file for writing
        with open(csv_file, 'w', newline='') as csv_file:
            csv_writer = csv.writer(csv_file)

            # Write each row from the TSV file to the CSV file
            for row in tsv_reader:
                csv_writer.writerow(row)

# Example usage:
tsv_to_csv('academic.tsv', 'academic.csv')
