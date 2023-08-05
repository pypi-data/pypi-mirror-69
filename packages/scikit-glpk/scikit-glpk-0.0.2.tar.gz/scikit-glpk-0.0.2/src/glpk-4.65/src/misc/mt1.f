      SUBROUTINE MT1(N,P,W,C,Z,X,JDIM,JCK,XX,MIN,PSIGN,WSIGN,ZSIGN)
C
C THIS SUBROUTINE SOLVES THE 0-1 SINGLE KNAPSACK PROBLEM
C
C MAXIMIZE  Z = P(1)*X(1) + ... + P(N)*X(N)
C
C SUBJECT TO:   W(1)*X(1) + ... + W(N)*X(N) .LE. C ,
C               X(J) = 0 OR 1  FOR J=1,...,N.
C
C THE PROGRAM IS INCLUDED IN THE VOLUME
C   S. MARTELLO, P. TOTH, "KNAPSACK PROBLEMS: ALGORITHMS
C   AND COMPUTER IMPLEMENTATIONS", JOHN WILEY, 1990
C AND IMPLEMENTS THE BRANCH-AND-BOUND ALGORITHM DESCRIBED IN
C SECTION  2.5.2 .
C THE PROGRAM DERIVES FROM AN EARLIER CODE PRESENTED IN
C  S. MARTELLO, P. TOTH, "ALGORITHM FOR THE SOLUTION OF THE 0-1 SINGLE
C  KNAPSACK PROBLEM", COMPUTING, 1978.
C
C THE INPUT PROBLEM MUST SATISFY THE CONDITIONS
C
C   1) 2 .LE. N .LE. JDIM - 1 ;
C   2) P(J), W(J), C  POSITIVE INTEGERS;
C   3) MAX (W(J)) .LE. C ;
C   4) W(1) + ... + W(N) .GT. C ;
C   5) P(J)/W(J) .GE. P(J+1)/W(J+1) FOR J=1,...,N-1.
C
C MT1 CALLS  1  PROCEDURE: CHMT1.
C
C THE PROGRAM IS COMPLETELY SELF-CONTAINED AND COMMUNICATION TO IT IS
C ACHIEVED SOLELY THROUGH THE PARAMETER LIST OF MT1.
C NO MACHINE-DEPENDENT CONSTANT IS USED.
C THE PROGRAM IS WRITTEN IN 1967 AMERICAN NATIONAL STANDARD FORTRAN
C AND IS ACCEPTED BY THE PFORT VERIFIER (PFORT IS THE PORTABLE
C SUBSET OF ANSI DEFINED BY THE ASSOCIATION FOR COMPUTING MACHINERY).
C THE PROGRAM HAS BEEN TESTED ON A DIGITAL VAX 11/780 AND AN H.P.
C 9000/840.
C
C MT1 NEEDS  8  ARRAYS ( P ,  W ,  X ,  XX ,  MIN ,  PSIGN ,  WSIGN
C                        AND  ZSIGN ) OF LENGTH AT LEAST  N + 1 .
C
C MEANING OF THE INPUT PARAMETERS:
C N    = NUMBER OF ITEMS;
C P(J) = PROFIT OF ITEM  J  (J=1,...,N);
C W(J) = WEIGHT OF ITEM  J  (J=1,...,N);
C C    = CAPACITY OF THE KNAPSACK;
C JDIM = DIMENSION OF THE 8 ARRAYS;
C JCK  = 1 IF CHECK ON THE INPUT DATA IS DESIRED,
C      = 0 OTHERWISE.
C
C MEANING OF THE OUTPUT PARAMETERS:
C Z    = VALUE OF THE OPTIMAL SOLUTION IF  Z .GT. 0 ,
C      = ERROR IN THE INPUT DATA (WHEN JCK=1) IF Z .LT. 0 : CONDI-
C        TION  - Z  IS VIOLATED;
C X(J) = 1 IF ITEM  J  IS IN THE OPTIMAL SOLUTION,
C      = 0 OTHERWISE.
C
C ARRAYS XX, MIN, PSIGN, WSIGN AND ZSIGN ARE DUMMY.
C
C ALL THE PARAMETERS ARE INTEGER. ON RETURN OF MT1 ALL THE INPUT
C PARAMETERS ARE UNCHANGED.
C
      INTEGER P(JDIM),W(JDIM),X(JDIM),C,Z
      INTEGER XX(JDIM),MIN(JDIM),PSIGN(JDIM),WSIGN(JDIM),ZSIGN(JDIM)
      INTEGER CH,CHS,DIFF,PROFIT,R,T
      Z = 0
      IF ( JCK .EQ. 1 ) CALL CHMT1(N,P,W,C,Z,JDIM)
      IF ( Z .LT. 0 ) RETURN
C INITIALIZE.
      CH = C
      IP = 0
      CHS = CH
      DO 10 LL=1,N
        IF ( W(LL) .GT. CHS ) GO TO 20
        IP = IP + P(LL)
        CHS = CHS - W(LL)
   10 CONTINUE
   20 LL = LL - 1
      IF ( CHS .EQ. 0 ) GO TO 50
      P(N+1) = 0
      W(N+1) = CH + 1
      LIM = IP + CHS*P(LL+2)/W(LL+2)
      A = W(LL+1) - CHS
      B = IP + P(LL+1)
      LIM1 = B - A*FLOAT(P(LL))/FLOAT(W(LL))
      IF ( LIM1 .GT. LIM ) LIM = LIM1
      MINK = CH + 1
      MIN(N) = MINK
      DO 30 J=2,N
        KK = N + 2 - J
        IF ( W(KK) .LT. MINK ) MINK = W(KK)
        MIN(KK-1) = MINK
   30 CONTINUE
      DO 40 J=1,N
        XX(J) = 0
   40 CONTINUE
      Z = 0
      PROFIT = 0
      LOLD = N
      II = 1
      GO TO 170
   50 Z = IP
      DO 60 J=1,LL
        X(J) = 1
   60 CONTINUE
      NN = LL + 1
      DO 70 J=NN,N
        X(J) = 0
   70 CONTINUE
      RETURN
C TRY TO INSERT THE II-TH ITEM INTO THE CURRENT SOLUTION.
   80 IF ( W(II) .LE. CH ) GO TO 90
      II1 = II + 1
      IF ( Z .GE. CH*P(II1)/W(II1) + PROFIT ) GO TO 280
      II = II1
      GO TO 80
C BUILD A NEW CURRENT SOLUTION.
   90 IP = PSIGN(II)
      CHS = CH - WSIGN(II)
      IN = ZSIGN(II)
      DO 100 LL=IN,N
        IF ( W(LL) .GT. CHS ) GO TO 160
        IP = IP + P(LL)
        CHS = CHS - W(LL)
  100 CONTINUE
      LL = N
  110 IF ( Z .GE. IP + PROFIT ) GO TO 280
      Z = IP + PROFIT
      NN = II - 1
      DO 120 J=1,NN
        X(J) = XX(J)
  120 CONTINUE
      DO 130 J=II,LL
        X(J) = 1
  130 CONTINUE
      IF ( LL .EQ. N ) GO TO 150
      NN = LL + 1
      DO 140 J=NN,N
        X(J) = 0
  140 CONTINUE
  150 IF ( Z .NE. LIM ) GO TO 280
      RETURN
  160 IU = CHS*P(LL)/W(LL)
      LL = LL - 1
      IF ( IU .EQ. 0 ) GO TO 110
      IF ( Z .GE. PROFIT + IP + IU ) GO TO 280
C SAVE THE CURRENT SOLUTION.
  170 WSIGN(II) = CH - CHS
      PSIGN(II) = IP
      ZSIGN(II) = LL + 1
      XX(II) = 1
      NN = LL - 1
      IF ( NN .LT. II) GO TO 190
      DO 180 J=II,NN
        WSIGN(J+1) = WSIGN(J) - W(J)
        PSIGN(J+1) = PSIGN(J) - P(J)
        ZSIGN(J+1) = LL + 1
        XX(J+1) = 1
  180 CONTINUE
  190 J1 = LL + 1
      DO 200 J=J1,LOLD
        WSIGN(J) = 0
        PSIGN(J) = 0
        ZSIGN(J) = J
  200 CONTINUE
      LOLD = LL
      CH = CHS
      PROFIT = PROFIT + IP
      IF ( LL - (N - 2) ) 240, 220, 210
  210 II = N
      GO TO 250
  220 IF ( CH .LT. W(N) ) GO TO 230
      CH = CH - W(N)
      PROFIT = PROFIT + P(N)
      XX(N) = 1
  230 II = N - 1
      GO TO 250
  240 II = LL + 2
      IF ( CH .GE. MIN(II-1) ) GO TO 80
C SAVE THE CURRENT OPTIMAL SOLUTION.
  250 IF ( Z .GE. PROFIT ) GO TO 270
      Z = PROFIT
      DO 260 J=1,N
        X(J) = XX(J)
  260 CONTINUE
      IF ( Z .EQ. LIM ) RETURN
  270 IF ( XX(N) .EQ. 0 ) GO TO 280
      XX(N) = 0
      CH = CH + W(N)
      PROFIT = PROFIT - P(N)
C BACKTRACK.
  280 NN = II - 1
      IF ( NN .EQ. 0 ) RETURN
      DO 290 J=1,NN
        KK = II - J
        IF ( XX(KK) .EQ. 1 ) GO TO 300
  290 CONTINUE
      RETURN
  300 R = CH
      CH = CH + W(KK)
      PROFIT = PROFIT - P(KK)
      XX(KK) = 0
      IF ( R .LT. MIN(KK) ) GO TO 310
      II = KK + 1
      GO TO 80
  310 NN = KK + 1
      II = KK
C TRY TO SUBSTITUTE THE NN-TH ITEM FOR THE KK-TH.
  320 IF ( Z .GE. PROFIT + CH*P(NN)/W(NN) ) GO TO 280
      DIFF = W(NN) - W(KK)
      IF ( DIFF ) 370, 330, 340
  330 NN = NN + 1
      GO TO 320
  340 IF ( DIFF .GT. R ) GO TO 330
      IF ( Z .GE. PROFIT + P(NN) ) GO TO 330
      Z = PROFIT + P(NN)
      DO 350 J=1,KK
        X(J) = XX(J)
  350 CONTINUE
      JJ = KK + 1
      DO 360 J=JJ,N
        X(J) = 0
  360 CONTINUE
      X(NN) = 1
      IF ( Z .EQ. LIM ) RETURN
      R = R - DIFF
      KK = NN
      NN = NN + 1
      GO TO 320
  370 T = R - DIFF
      IF ( T .LT. MIN(NN) ) GO TO 330
      IF ( Z .GE. PROFIT + P(NN) + T*P(NN+1)/W(NN+1)) GO TO 280
      CH = CH - W(NN)
      PROFIT = PROFIT + P(NN)
      XX(NN) = 1
      II = NN + 1
      WSIGN(NN) = W(NN)
      PSIGN(NN) = P(NN)
      ZSIGN(NN) = II
      N1 = NN + 1
      DO 380 J=N1,LOLD
        WSIGN(J) = 0
        PSIGN(J) = 0
        ZSIGN(J) = J
  380 CONTINUE
      LOLD = NN
      GO TO 80
      END
      SUBROUTINE CHMT1(N,P,W,C,Z,JDIM)
C
C CHECK THE INPUT DATA.
C
      INTEGER P(JDIM),W(JDIM),C,Z
      IF ( N .GE. 2 .AND. N .LE. JDIM - 1 ) GO TO 10
      Z = - 1
      RETURN
   10 IF ( C .GT. 0 ) GO TO 30
   20 Z = - 2
      RETURN
   30 JSW = 0
      RR = FLOAT(P(1))/FLOAT(W(1))
      DO 50 J=1,N
        R = RR
        IF ( P(J) .LE. 0 ) GO TO 20
        IF ( W(J) .LE. 0 ) GO TO 20
        JSW = JSW + W(J)
        IF ( W(J) .LE. C ) GO TO 40
        Z = - 3
        RETURN
   40   RR = FLOAT(P(J))/FLOAT(W(J))
        IF ( RR .LE. R ) GO TO 50
        Z = - 5
        RETURN
   50 CONTINUE
      IF ( JSW .GT. C ) RETURN
      Z = - 4
      RETURN
      END
