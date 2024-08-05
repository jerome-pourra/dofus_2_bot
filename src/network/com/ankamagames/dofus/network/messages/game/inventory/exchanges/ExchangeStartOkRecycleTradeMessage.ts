import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkRecycleTradeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1067;

	public percentToPrism: number = 0;
	public percentToPlayer: number = 0;
	public adjacentSubareaPossessed: Array<number>;
	public adjacentSubareaUnpossessed: Array<number>;

    public constructor()
    {
        super();
        this.adjacentSubareaPossessed = Array<number>();
        this.adjacentSubareaUnpossessed = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkRecycleTradeMessage(input);
    }

    private deserializeAs_ExchangeStartOkRecycleTradeMessage(input: ICustomDataInput)
    {
        let _val3: number = 0;
        let _val4: number = 0;
        this._percentToPrismFunc(input);
        this._percentToPlayerFunc(input);
        let _adjacentSubareaPossessedLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _adjacentSubareaPossessedLen; _i3++)
        {
            _val3 = input.readInt();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of adjacentSubareaPossessed.");
            }
            this.adjacentSubareaPossessed.push(_val3);
        }
        let _adjacentSubareaUnpossessedLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _adjacentSubareaUnpossessedLen; _i4++)
        {
            _val4 = input.readInt();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of adjacentSubareaUnpossessed.");
            }
            this.adjacentSubareaUnpossessed.push(_val4);
        }
    }

    private _percentToPrismFunc(input: ICustomDataInput)
    {
        this.percentToPrism = input.readShort();
        if(this.percentToPrism < 0)
        {
            throw new Error("Forbidden value (" + this.percentToPrism + ") on element of ExchangeStartOkRecycleTradeMessage.percentToPrism.");
        }
    }

    private _percentToPlayerFunc(input: ICustomDataInput)
    {
        this.percentToPlayer = input.readShort();
        if(this.percentToPlayer < 0)
        {
            throw new Error("Forbidden value (" + this.percentToPlayer + ") on element of ExchangeStartOkRecycleTradeMessage.percentToPlayer.");
        }
    }

}