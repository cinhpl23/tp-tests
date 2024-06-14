
import { getScore } from "../modules/game";
import { describe, it, expect } from 'vitest';

describe('getScore', () => {
    it('should return the correct score for a team of green dice', () => {
        const score = getScore(['green', 'green', 'green']);
        expect(score).toBe(1 + 1 + 1); 
    });

    it('should return the correct score for a team of gray dice', () => {
        const score = getScore(['gray', 'gray', 'gray']);
        expect(score).toBe(2 + 2 + 2); 
    });

    it('should return the correct score for a team of orange dice', () => {
        const score = getScore(['orange', 'orange', 'orange']);
        expect(score).toBe(1 + 1 + 1); 
    });

    it('should return the correct score for a team with a yellow die', () => {
        const score = getScore(['green', 'yellow', 'gray']);
        expect(score).toBe( 1 - 1 + 2);
    });

    it('should return the correct score for a team with multiple pink dice', () => {
        const score = getScore(['pink', 'pink', 'gray']);
        expect(score).toBe(3 + 3 + 2); 
    });

    it('should return the correct score for a team with gray and pink dice', () => {
        const score = getScore(['gray', 'pink']);
        expect(score).toBe(2 + 3 ); 
    });

    it('should return the correct score for a team with multiple gray and pink dice', () => {
        const score = getScore(['gray', 'gray', 'pink', 'pink', 'gray']);
        expect(score).toBe(2 + 2 + 3 + 3 + 0); 
    });

    it('should return the correct score for a team with blue dice', () => {
        const score = getScore(['blue', 'blue', 'blue'], 3);
        expect(score).toBe(3 + 3 + 3); 
    });

    it('should return the correct score for a team with orange dice in even number', () => {
        const score = getScore(['orange', 'orange']);
        expect(score).toBe(2 + 2);
    });

    it('should return the correct score form a team with blue dice and zero in other teams', () => {
        const score = getScore(['blue', 'blue']);
        expect(score).toBe(0 + 0);
    })
});

