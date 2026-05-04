export type CaseStudy = {
    id: string;
    title: string;
    clientName: string;      // 企業名（TIS株式会社など）
    category: string[];      // 組織開発, 採用, 新規事業 など
    description: string;     // 概要
    mainVisual: {            // microCMSの画像フィールド
      url: string;
      width: number;
      height: number;
    };
    content: string;         // 本文（リッチエディタ）
    publishedAt: string;     // 公開日
  };