import { WalletAddress } from '../../types';

export interface Status {}

export interface Currency {
    name: string;
    amount: string;
}

export type SocialMediaPlatform = 'Twitter' | 'Facebook' | 'Instagram' | 'Discord';

export type FundraiserCategory =
    | 'Medical'
    | 'Memorial'
    | 'Emergency'
    | 'Nonprofit'
    | 'Financial Emergency';

export interface SocialMedia {
    name: SocialMediaPlatform;
    url: string;
}

export interface User {
    walletAddress: WalletAddress;
    username: string;
    image: string;
}

export interface Fundraiser {
    id: string;
    title: string;
    description: string;
    body: string;
    creator: User;
    receiver?: User;
    funds: {
        collected: string;
        goal: string;
        currencies: Currency[]; // Ordered by the USDT value;
        currenciesCount: string;
    };
    socialMedia: SocialMedia[];
    category: FundraiserCategory;
    image: string;
    timestamp: Date;
}

export interface Donation {
    name: string;
    currency: Currency;
    timestamp: Date;
}
