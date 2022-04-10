import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      datasets: {
        create: {
          title: 'Dataset 1',
          sample: {
            create: [
              {
                title: 'Sample 1',
                thumbnail: '5b9efa41e62914002e947b7b',
                clinical_data: {
                  uniqueSampleKey:
                    'VENHQS1PUi1BNUoxLTAxOmFjY190Y2dhX3Bhbl9jYW5fYXRsYXNfMjAxOA',
                  uniquePatientKey:
                    'VENHQS1PUi1BNUoxOmFjY190Y2dhX3Bhbl9jYW5fYXRsYXNfMjAxOA',
                  sampleId: 'TCGA-OR-A5J1-01',
                  patientId: 'TCGA-OR-A5J1',
                  studyId: 'acc_tcga_pan_can_atlas_2018',
                  clinicalAttribute: {
                    displayName: 'Aneuploidy Score',
                    description: 'Aneuploidy Score',
                    datatype: 'NUMBER',
                    patientAttribute: false,
                    priority: '1',
                    clinicalAttributeId: 'ANEUPLOIDY_SCORE',
                    studyId: 'acc_tcga_pan_can_atlas_2018',
                  },
                  clinicalAttributeId: 'ANEUPLOIDY_SCORE',
                  value: '2',
                },
              },
            ],
          },
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      datasets: {
        create: {
          title: 'Dataset 2',
          sample: {
            create: [
              {
                title: 'Sample 1',
                thumbnail: '5b9efa41e62914002e947b7b',
                clinical_data: {
                  uniqueSampleKey:
                    'VENHQS1PUi1BNUoxLTAxOmFjY190Y2dhX3Bhbl9jYW5fYXRsYXNfMjAxOA',
                  uniquePatientKey:
                    'VENHQS1PUi1BNUoxOmFjY190Y2dhX3Bhbl9jYW5fYXRsYXNfMjAxOA',
                  sampleId: 'TCGA-OR-A5J1-01',
                  patientId: 'TCGA-OR-A5J1',
                  studyId: 'acc_tcga_pan_can_atlas_2018',
                  clinicalAttribute: {
                    displayName: 'Aneuploidy Score',
                    description: 'Aneuploidy Score',
                    datatype: 'NUMBER',
                    patientAttribute: false,
                    priority: '1',
                    clinicalAttributeId: 'ANEUPLOIDY_SCORE',
                    studyId: 'acc_tcga_pan_can_atlas_2018',
                  },
                  clinicalAttributeId: 'ANEUPLOIDY_SCORE',
                  value: '2',
                },
              },
            ],
          },
        },
      },
    },
  });

  console.log({ alice, bob });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
