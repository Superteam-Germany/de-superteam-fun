import { NextResponse } from 'next/server';
import Axios, { isAxiosError } from 'axios';

const axios = Axios.create({
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  },
});

// todo: add revalidation and static site generation

export async function GET(request: Request) {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_PROJECTS_TABLE_ID;
  try {
    const projects = await axios.get(
      `https://api.airtable.com/v0/${baseId}/${tableId}`
    );
    return NextResponse.json({ projects: projects.data.records });
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('🚀 ~ file: route.ts:22 ~ GET ~ error:', error.message);
      return NextResponse.error();
    }
  }
}

// projects response
// {
//   "id": "rec43B315aVXlOvaO",
//   "createdTime": "2023-08-27T18:01:53.000Z",
//   "fields": {
//       "name": "Triggr",
//       "description": "No-code automation platform for power users on Solana. ",
//       "link": "https://triggr.app",
//       "logo": [
//           {
//               "id": "attTudKGaer0PaFDO",
//               "width": 800,
//               "height": 350,
//               "url": "https://v5.airtableusercontent.com/v1/20/20/1693260000000/0l4QjsmG2GXsiW9LTWSMfw/D-Vd2zHLE8cGEPkYzFilVLRJVi23lKLQwcMRk5Fo1yGzxffGb3nt9dkh34amGVI7GkLIBc9MGo3Tt39au8-QMEtj7Jl2eEvrwWRlV5S9GOs/98PFRhSO9IY78h624rr85qIx6i-AkGkvs2i_83Lt6sE",
//               "filename": "triggrLogo.svg",
//               "size": 3714,
//               "type": "image/svg+xml",
//               "thumbnails": {
//                   "small": {
//                       "url": "https://v5.airtableusercontent.com/v1/20/20/1693260000000/ezphujur6cLfHLp2Qm96dQ/pHV04ZgYRP2Ssme4-yXcy8uUml2hpdUSFKZ-JYG6ijpCdm03LQE8pWii2SITpx8AhzKvdkzOzQxngmEctI3oeTwPqNta99QdL9mVDtx2aj0/LDztgEm_fUeU3J-gzMl1xIgOe6KDOHwxY_OknjmILFM",
//                       "width": 82,
//                       "height": 36
//                   },
//                   "large": {
//                       "url": "https://v5.airtableusercontent.com/v1/20/20/1693260000000/PnDZBPPd880hbnqZlLqBRw/t0ZoDyWT4_9nTifuqJV1Zw6VJ5hTdJyQs5ixfk7rNfvx6xFsWBLssZuobMkukwlgiJkzJKFq-S35B15N6U8FTGch1NIFmdBvDL13P1yRqBM/WAgHVTrQw9f2in27JdUIUDFcbyi-0hfjaFCV5OsnycI",
//                       "width": 800,
//                       "height": 350
//                   },
//                   "full": {
//                       "url": "https://v5.airtableusercontent.com/v1/20/20/1693260000000/TCnWJqB4GQhVS1NdnI-eBg/G5cQEQbjzDXc_6xfg766Xgr8cTSmIFpbWTaIOdAPrgVtwwi0Z4IkOd96qIvLyZ6xWm3LRU0H4MbSTVyzDdSf9kUajgkbVD6Pv9pD3EI3tQE/-w88-STbTsG0fIjHojKhgFdalC-kubiURjSEc8Ky2TM",
//                       "width": 3000,
//                       "height": 3000
//                   }
//               }
//           }
//       ]
//   }
// }
